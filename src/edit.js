import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element'
import { Icon, ToggleControl, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { tabsTitle, tabsContent, tabHorizontal } = attributes;
	const [toggleTab, setToggleTab] = useState(1);
	const toggleTabChange = (val) => {
		console.log(val);
		setToggleTab(val);
	}
	const onTabsTitleChange = (index, type, value) => {
		const tabsTitleCopy = [...tabsTitle];
		tabsTitleCopy[index][type] = value;
		setAttributes({
            tabsTitle: tabsTitleCopy,
        })

	}
	const onClickAddTabs = () => {
		setAttributes({
			tabsTitle: [...tabsTitle, { 'title': 'Tabs' + (tabsTitle.length + 1) }],
			tabsContent: [...tabsContent, { 'content': '' }]
		})
	}
	const onTabsContentChange = (index, type, value) => {
		const tabsContentCopy = [...tabsContent];
		tabsContentCopy[index][type] = value;
		setAttributes({
            tabsContent: tabsContentCopy,
        })
	}

	return (
		<>
		<InspectorControls>
			<PanelBody title={__('Tab Settings', 'mrs-tabs-block')} >
				<ToggleControl
                    label={__('Horizontal Tab', 'mrs-tabs-block')}
                    checked={tabHorizontal}
                    onChange={() => setAttributes({ tabHorizontal:!tabHorizontal })}
                />
			</PanelBody>
		</InspectorControls>
		<div { ...useBlockProps() }>
			<div className={tabHorizontal ? 'tab tab-horizontal' : 'tab tab-vertical'}>
				<ul className='tab-list'>
					{tabsTitle && tabsTitle.map((tab, index) => {
						return (
							<li key={index} className={(toggleTab === index + 1) ? 'active' : ''} onClick={() => toggleTabChange(index + 1)}>
									<RichText value={tab.title} onChange={(title) => onTabsTitleChange(index, 'title', title)} />
							</li>
						)
					})}
					<li onClick={onClickAddTabs}>						
							<Icon icon={'plus'} />						
					</li>
				</ul>
				{tabsContent && tabsContent.map((tab, index) => {
					return (
						<div key={index} className='tab-container'>
							<div id={`tab-${index + 1}`} className={ toggleTab === (index + 1) ? 'tab-content active' : 'tab-content'}>
								<h4>{tabsTitle && tabsTitle[index].title }</h4>
								<RichText placeholder='Enter Tabs Content' value={tab.content} onChange={(content)=>onTabsContentChange(index, 'content', content)} />
							</div>
						</div>
					)
				})}
			</div>			
		</div>
		</>
	);
}
