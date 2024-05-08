import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {

	const { tabHorizontal, tabsWidth, tabBtnTextColor, tabBtnBgColor, tabsTitle, tabBtnActiveTextColor, tabBtnActiveBgColor, tabBtnType, tabBtnHoverBgColor, tabBtnHoverTextColor, tabsContent, mrsActiveId, contentTextAlignment, tabContentColors, contentBorder, contentBorderObj, contentBorderRadius, contentPadding, tabHeadingTagName } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className={tabHorizontal ? 'tab tab-vertical' : 'tab tab-horizontal'} style={{ width: tabsWidth + 'px'}}>
				<ul className='mrs-tab-list' style={{color: tabBtnTextColor, backgroundColor: tabBtnBgColor}}>
				{ tabsTitle?.map((tab, index) => {
					return (
						<li key={index}
							className={'mrs-tab-list-li'}
							style={{
							'--hover-bg-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverBgColor : tabBtnActiveBgColor,
						 }}>
							<a href={`#tab-${(index + 1)}`}
								style={{
									'--hover-text-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverTextColor : tabBtnActiveTextColor}}
							>
								<RichText.Content
									value={tab.title}										
									/>
							</a>
						 </li>
					)})}
				</ul>
				{tabsContent?.map((tab, index) => {
					return (
						<div key={index}
							className='tab-container'
							style={{
								textAlign: contentTextAlignment,
								background: tabContentColors?.find( t => parseInt(t.id) === parseInt(tab.id))?.bgColor,
								border: contentBorder && `${contentBorderObj?.width} ${contentBorderObj?.style} ${contentBorderObj?.color}`,
								borderRadius: contentBorder && contentBorderRadius && contentBorderRadius + 'px',
								paddingTop: contentPadding?.top,
								paddingLeft: contentPadding?.left,
								paddingBottom: contentPadding?.bottom,
								paddingRight: contentPadding?.right,
								}}>
							<div id={`tab-${(index + 1)}`} className={'tab-content'}>
								{/* <h4>{tabsTitle && tabsTitle[index].title }</h4> */}
								<RichText.Content
									value={tab.title}
									tagName={tabHeadingTagName}
									style={{ color: tabContentColors?.find( t => parseInt(t.id) === parseInt(tab.id))?.titleColor }}
									/>

								<RichText.Content
									value={tab.content}
									tagName='p'
									style={{ color: tabContentColors?.find( t => parseInt(t.id) === parseInt(tab.id))?.textColor }}
									/>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}
