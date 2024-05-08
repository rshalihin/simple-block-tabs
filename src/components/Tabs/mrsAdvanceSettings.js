import { __ } from "@wordpress/i18n";
import { MenuGroup, ToggleControl, __experimentalDivider as Divider  } from "@wordpress/components";

const AdvancedSettings = ({attributes, setAttributes}) => {

    const { responsiveConditions } = attributes;
    console.log(responsiveConditions)

    return (
        <div>
            <h2>Advanced Settings</h2>
            <MenuGroup>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{__('Hide on Desktops', 'mrs-tabs-block')}</p>
                    <ToggleControl                     
                     checked={ responsiveConditions.desktop }
                     onChange={(v) => setAttributes({ responsiveConditions : {...responsiveConditions, desktop: v }})}
                />
                </div>                
                <Divider />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{__('Hide on Tablet', 'mrs-tabs-block')}</p>
                    <ToggleControl                     
                     checked={ responsiveConditions.tablet }
                     onChange={(v) => setAttributes({ responsiveConditions : {...responsiveConditions, tablet: v }})}
                />
                </div>                
                <Divider />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{__('Hide on Mobile', 'mrs-tabs-block')}</p>
                    <ToggleControl                     
                     checked={ responsiveConditions.mobile }
                     onChange={(v) => setAttributes({ responsiveConditions : {...responsiveConditions, mobile: v }})}
                />
                </div>                
            </MenuGroup>
        </div>
    )
}
export default AdvancedSettings;