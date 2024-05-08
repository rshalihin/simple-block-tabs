import { __ } from "@wordpress/i18n";
import { PanelColorSettings } from "@wordpress/block-editor";
import { MenuGroup, ButtonGroup, Button, Icon, __experimentalDivider as Divider, ToggleControl, __experimentalBorderControl as BorderControl, RangeControl, __experimentalBoxControl as BoxControl } from "@wordpress/components";

const StylesSettings = ({ attributes, setAttributes }) => {

    const { mrsActiveId, tabBtnType, tabBtnTextColor, tabBtnBgColor, tabBtnHoverTextColor, tabBtnHoverBgColor, tabBtnActiveTextColor, tabBtnActiveBgColor, tabContentColors, contentBorder, contentBorderObj, contentBorderRadius, contentPadding } = attributes;

    const onChangeContentColor = ( value, type ) => {
        if ( type === 'titleColor' ) {
            const intActiveId = parseInt( mrsActiveId );
            const tabContentColor = tabContentColors?.find( t => parseInt(t.id) === intActiveId);
            const updateTabContentColor = {...tabContentColor, 'titleColor': value };
            const updateTabContentColorsCopy = tabContentColors.map( (t) => {
                if ( parseInt(t.id) === intActiveId ) {
                    return updateTabContentColor;
                }
                return t;
            })
            setAttributes({ tabContentColors: updateTabContentColorsCopy });
        }
        if ( type === 'textColor' ) {
            const intActiveId = parseInt( mrsActiveId );
            const tabContentColor = tabContentColors?.find( t => parseInt(t.id) === intActiveId);
            const updateTabContentColor = {...tabContentColor, 'textColor': value };
            const updateTabContentColorsCopy = tabContentColors.map( (t) => {
                if ( parseInt(t.id) === intActiveId ) {
                    return updateTabContentColor;
                }
                return t;
            })
            setAttributes({ tabContentColors: updateTabContentColorsCopy });
        }
        
        if ( type === 'bgColor' ) {
            const intActiveId = parseInt( mrsActiveId );
            const tabContentColor = tabContentColors?.find( t => parseInt(t.id) === intActiveId);
            const updateTabContentColor = {...tabContentColor, 'bgColor': value };
            const updateTabContentColorsCopy = tabContentColors.map( (t) => {
                if ( parseInt(t.id) === intActiveId ) {
                    return updateTabContentColor;
                }
                return t;
            })
            setAttributes({ tabContentColors: updateTabContentColorsCopy });
        }        
    }

    return (
        <div>
            <h4>Styles Settings</h4>
            <MenuGroup label={__('Tab Button Settings', 'mrs-tabs-block')}>
                <ButtonGroup>
                    <Button
                        className='mrs-button-tab-alignment'
                        variant='primary'
                        onClick={() => setAttributes({tabBtnType: 'primary'})}
                    >
                        {__('Primary', 'mrs-tabs-block')}                        
                    </Button>
                    <Button
                        className='mrs-button-tab-alignment'
                        variant='secondary'
                        onClick={()=> setAttributes({tabBtnType: 'secondary'})}
                    >
                        {__('Secondary', 'mrs-tabs-block')}
                    </Button>
                    <Button
                        className='mrs-button-tab-alignment'
                        variant='secondary'
                        onClick={()=> setAttributes({tabBtnType: 'custom'})}
                        style={{ justifyContent: 'space-evenly'}}
                    >
                        {__('Custom', 'mrs-tabs-block')} <Icon icon={'admin-customizer'} />
                    </Button>
                </ButtonGroup>

                {tabBtnType && tabBtnType === 'custom' && (
                    <PanelColorSettings
                        title={__('Tab Buttons Color Settings', 'mrs-tabs-block')}
                        disableCustomColors={false}
                        colorSettings={[                            
                            {
                                label: __('Tab Text Color', 'mrs-tabs-block'),
                                value: tabBtnTextColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnTextColor: value})
                                }
                            },
                            {
                                label: __('Tab Background Color', 'mrs-tabs-block'),
                                value: tabBtnBgColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnBgColor: value})
                                }
                            },
                            {
                                label: __('Tab Hover Text Color', 'mrs-tabs-block'),
                                value: tabBtnHoverTextColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnHoverTextColor: value})
                                }
                            },
                            {
                                label: __('Tab Hover Background Color', 'mrs-tabs-block'),
                                value: tabBtnHoverBgColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnHoverBgColor: value})
                                }
                            },
                            {
                                label: __('Tab Active Text Color', 'mrs-tabs-block'),
                                value: tabBtnActiveTextColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnActiveTextColor: value})
                                }
                            },
                            {
                                label: __('Tab Active Background Color', 'mrs-tabs-block'),
                                value: tabBtnActiveBgColor,
                                onChange: (value) => {
                                    setAttributes({tabBtnActiveBgColor: value})
                                }
                            }
                        ]}
                    />
                )}
                
                <Divider />

                <PanelColorSettings
                    label={__('Tab Content Color Settings', 'mrs-tabs-block')}
                    disableCustomColors={false}
                    colorSettings={[
                        {
                            label: __('Tab Content Title Color', 'mrs-tabs-block'),
                            value: tabContentColors?.find(t=> parseInt(t.id) === parseInt(mrsActiveId))?.titleColor,
                            onChange: (value) => {
                                onChangeContentColor( value, 'titleColor' )
                            }
                        },
                        {
                            label: __('Tab Content Text Color', 'mrs-tabs-block'),
                            value: tabContentColors?.find( t => parseInt(t.id) === parseInt(mrsActiveId))?.textColor,
                            onChange: (value) => {
                                onChangeContentColor( value, 'textColor' )
                            }
                        },
                        {
                            label: __('Tab Content Background Color', 'mrs-tabs-block'),
                            value: tabContentColors?.find( t => parseInt(t.id) === parseInt(mrsActiveId))?.bgColor,
                            onChange: (value) => {
                                onChangeContentColor( value, 'bgColor' )
                            }
                        }
                    ]}
                />
                <Divider />
                <ToggleControl label={__('Tab Border Settings', 'mrs-tabs-block')} checked={contentBorder} onChange={() => setAttributes({contentBorder: !contentBorder})} />
                <Divider />
                 { contentBorder && (
                    <>
                        <BorderControl
                            label={__('Content Border Color', 'mrs-tabs-block')}
                            value={contentBorderObj}
                            onChange={(newBorder) => setAttributes({contentBorderObj: newBorder})}
                            />
                        
                        <Divider />
                        
                        <RangeControl
                            help={__('Please select how border radius you would like in Tab Container would be.', 'mrs-tabs-block')}
                            initialPosition={0}
                            label={__('Border Radius', 'mrs-tabs-block')}
                            max={50}
                            min={0}
                            onChange={(value) => { setAttributes({ contentBorderRadius: value})}}
                        />
                    </>
                 )}
                 <Divider />
                 <BoxControl
                    values={contentPadding}
                    onChange={(newPadding)=> setAttributes({contentPadding: newPadding})} />
            </MenuGroup>            
        </div>
    )
}

export default StylesSettings;
