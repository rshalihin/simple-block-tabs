import { __experimentalDivider as Divider, MenuGroup, ButtonGroup, Button, Icon, RangeControl } from "@wordpress/components";

const GeneralSettings = ({ tabTags, attributes, setAttributes }) => {
    const { tabHeadingTagName, tabHorizontal } = attributes;
    return (
        <div>
            <MenuGroup>
                <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                    {tabTags && tabTags.map( (tag, i) => (
                        <Button key={i} className="button-tags" onClick={()=>setAttributes({tabHeadingTagName: tag})}>{tag}</Button> 
                    ))}
                </ButtonGroup>
                <Divider />
                <p>Tab Direction</p>
                <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='secondary' className='tab-direction-button' onClick={()=> setAttributes({tabHorizontal: false})}>
                        Horizontal <Icon icon={'arrow-right-alt'} />
                    </Button>
                    <Button variant='secondary' className='tab-direction-button' onClick={()=> setAttributes({tabHorizontal: true})}>
                        vertical <Icon icon={'arrow-down-alt'} />
                    </Button>
                </ButtonGroup>

                <Divider />

                <ButtonGroup style={{display: 'flex', justifyContent: 'center'}}>
                    {['left', 'center', 'right'].map((align, i) => {
                        return(
                            <Button
                                key={i}
                                variant='secondary'
                                className='mrs-editor-text-alignment-button'
                                onClick={()=> setAttributes({contentTextAlignment: align})}
                            >
                                <Icon icon={`editor-align${align}`} />
                            </Button>
                        )
                    })}
                </ButtonGroup>
                <Divider />
                <RangeControl
                    help="Please select how much width you would like for tab."
                    initialPosition={50}
                    label="Width"
                    max={800}
                    min={350}
                    onChange={(e) => { setAttributes({tabsWidth: e })}}
                />
            </MenuGroup>
        </div>
    );
}

export default GeneralSettings;