import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Icon, PanelBody, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, __experimentalDivider as Divider } from '@wordpress/components';
import './editor.scss';
import GeneralSettings from './components/Tabs/mrsGeneralSettings.js';
import StylesSettings from './components/Tabs/mrsStyleSettings.js';
import AdvancedSettings from './components/Tabs/mrsAdvanceSettings.js';

export default function Edit({ attributes, setAttributes }) {

	const { mrsActiveId, tabsTitle, tabsContent, tabHorizontal, settingsPanelState, tabsWidth, contentTextAlignment, tabBtnTextColor, tabBtnBgColor, tabBtnHoverTextColor, tabBtnHoverBgColor, tabBtnActiveTextColor, tabBtnActiveBgColor, tabBtnType, tabHeadingTagName, tabContentColors, contentBorder, contentBorderObj, contentBorderRadius, contentPadding } = attributes;

	const [toggleTab, setToggleTab] = useState(1);
	const tabTags = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'p' ];

	const toggleTabChange = (val) => {
		setToggleTab(val);
		setAttributes({mrsActiveId: val});
	}
	const onTabsTitleChange = (index, type, value) => {
		const tabTitle = tabsTitle?.find(t => parseInt(t.id) === parseInt(index) + 1);
	    const updatedTabTitle = {...tabTitle, title:value};
	    const updatedTabsTitle = tabsTitle?.map((t) =>{
			if(parseInt(t.id) === parseInt(tabTitle.id)){
                return updatedTabTitle;
            };
			return t;
		});
	   setAttributes({tabsTitle:updatedTabsTitle});
	};
	const onTabsContentChange = (index, type, value) => {
		if ( type === 'content' ) {
			const tabContent = tabsContent.find(t => parseInt(t.id) === parseInt(index) + 1 );
			const updateTabContent = { ...tabContent, content: value };
			const updatedTabsContent = tabsContent?.map( (t) => {
				if ( parseInt(t.id) === parseInt(tabContent.id) ) {
					return updateTabContent;
				} else {
					return t;
				}
			})
			setAttributes({ tabsContent: updatedTabsContent });
		}
		if ( type === 'title' ) {
			const tabContent = tabsContent.find(t => parseInt(t.id) === parseInt(index) + 1 );
			const updateTabContent = { ...tabContent, title: value };
			const updatedTabsContent = tabsContent?.map( (t) => {
				if ( parseInt(t.id) === parseInt(tabContent.id) ) {
					return updateTabContent;
				} else {
					return t;
				}
			})
			setAttributes({ tabsContent: updatedTabsContent });
		}
	};

	const onClickAddTabs = () => {
		setAttributes({
			tabsTitle: [...tabsTitle, {'id' : tabsTitle.length + 1, 'title': 'Tabs' + (tabsTitle.length + 1) }],
			tabsContent: [...tabsContent, { 'id' : tabsContent.length + 1, 'content': '' }],
			tabContentColors: [...tabContentColors, { "id": tabContentColors.length + 1, 'titleColor': '#000000', 'textColor': '#303030', 'bgColor': '#ffffff' }]
		})
	}


	return (
		<>
		<InspectorControls>
			<PanelBody title={__('Tab Panel Settings', 'mrs-tabs-block')} >
				<ToggleGroupControl isBlock value={settingsPanelState} onChange={(state) => setAttributes({settingsPanelState: state})}>
					<ToggleGroupControlOption label='General' value='general' />
					<ToggleGroupControlOption label='Styles' value='styles' />
					<ToggleGroupControlOption label='Advanced' value='advanced' />
				</ToggleGroupControl>
				<Divider />
				{/* General Settings Component */}
				{ settingsPanelState === 'general' && (
					<GeneralSettings tabTags={tabTags} attributes={attributes} setAttributes={setAttributes} />
				)}
				{/* Style Settings Component */}
				{ settingsPanelState === 'styles' && (
					<StylesSettings attributes={attributes} setAttributes={setAttributes} />
				)}
				{/* Advanced Settings Component */}
				{ settingsPanelState === 'advanced' && (
					<AdvancedSettings attributes={attributes} setAttributes={setAttributes} />
				)}
			</PanelBody>
		</InspectorControls>
		<div { ...useBlockProps() }>
			<div className={tabHorizontal ? 'tab tab-vertical' : 'tab tab-horizontal'} style={{ width: tabsWidth + 'px'}}>
				<ul className='mrs-tab-list' style={{color: tabBtnTextColor, backgroundColor: tabBtnBgColor}}>
					{tabsTitle && tabsTitle.map((tab, index) => {
						return (
							<li key={index}
								id={`tab-${(index + 1)}`}
								className={(toggleTab === index + 1) ? 'active' : ''}
								onClick={() => toggleTabChange(index + 1)}
								style={{
								color: (toggleTab === index + 1 ) ? tabBtnActiveTextColor : '',
								backgroundColor: (toggleTab === index + 1 ) ? tabBtnActiveBgColor : '',
								'--hover-bg-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverBgColor : tabBtnActiveBgColor,
								'--hover-text-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverTextColor : tabBtnActiveTextColor,
							 }}>
									<RichText
										value={tab.title}
										placeholder={__('Title', 'mrs-block-tabs')}
										onChange={(newTitle) => onTabsTitleChange(index, 'title', newTitle)}										
									/>
							</li>
						)
					})}
					<li onClick={onClickAddTabs}>						
							<Icon icon={'plus'} />						
					</li>
				</ul>
				{tabsContent && tabsContent.map((tab, index) => {
					return (
						<div key={index}
							className='tab-container'
							style={{
								display: parseInt(tab.id) === parseInt(mrsActiveId) ? 'block' : 'none',
								textAlign: contentTextAlignment,
								background: tabContentColors?.find( t => parseInt(t.id) === parseInt(mrsActiveId))?.bgColor,
								border: contentBorder && `${contentBorderObj?.width} ${contentBorderObj?.style} ${contentBorderObj?.color}`,
								borderRadius: contentBorder && contentBorderRadius && contentBorderRadius + 'px',
								paddingTop: contentPadding?.top,
								paddingLeft: contentPadding?.left,
								paddingBottom: contentPadding?.bottom,
								paddingRight: contentPadding?.right,
								}}>
							<div id={`tab-${index + 1}`} className={ toggleTab === (index + 1) ? 'tab-content active' : 'tab-content'}>
								{/* <h4>{tabsTitle && tabsTitle[index].title }</h4> */}
								<RichText
									placeholder={__('Enter Tabs Title', 'mrs-tabs-block')}
									value={tab.title}
									onChange={(newContentTitle) => onTabsContentChange(index, 'title', newContentTitle)}
									tagName={tabHeadingTagName}
									style={{ color: tabContentColors?.find( t => parseInt(t.id) === parseInt(mrsActiveId))?.titleColor }}
									/>

								<RichText
									placeholder={__('Enter Tabs Content', 'mrs-tabs-block')}
									value={tab.content}
									tagName='p'
									onChange={(newContent)=>onTabsContentChange(index, 'content', newContent)}
									style={{ color: tabContentColors?.find( t => parseInt(t.id) === parseInt(mrsActiveId))?.textColor }}
									/>
							</div>
						</div>
					)
				})}
			</div>			
		</div>
		</>
	);
}
