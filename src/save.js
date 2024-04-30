import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { tabsTitle, tabsContent, tabHorizontal } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className={tabHorizontal ? 'tab tab-horizontal' : 'tab tab-vertical'}>
				<ul className='tab-list'>
					{tabsTitle && tabsTitle.map((tab, index) => {
						return (
							<li key={index} >								
								<a href={`#tab-${index + 1}`}>
									<RichText.Content value={tab.title} />
								</a>
							</li>
						)
					})}
				</ul>
				{tabsContent && tabsContent.map((tab, index) => {
					return (
						<div key={index}className='tab-container'>
							<div id={`tab-${index + 1}`} className='tab-content'>
								<h4>{tabsTitle && tabsTitle[index].title }</h4>
								<RichText.Content value={tab.content} />
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}
