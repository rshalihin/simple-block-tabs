;(function(){
    jQuery('.wp-block-mrs-block-mrs-tabs-block .tab .tab-list li:first-child').addClass('active');
    jQuery('.wp-block-mrs-block-mrs-tabs-block .tab .tab-container .tab-content:first').addClass('active');

    jQuery('.tab .tab-list li a').click(function(){
        jQuery('.tab .tab-list li').removeClass('active');
        jQuery(this).parent().addClass('active');

        let currentTab = jQuery(this).attr('href');
        console.log(currentTab);
        jQuery('.tab .tab-container .tab-content').removeClass('active');
        jQuery(currentTab).addClass('active');

        return false;
    })
})();