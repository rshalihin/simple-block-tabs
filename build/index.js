/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Tabs/mrsAdvanceSettings.js":
/*!***************************************************!*\
  !*** ./src/components/Tabs/mrsAdvanceSettings.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const AdvancedSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    responsiveConditions
  } = attributes;
  console.log(responsiveConditions);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Advanced Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Desktops', 'mrs-tabs-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions.desktop,
    onChange: v => setAttributes({
      responsiveConditions: {
        ...responsiveConditions,
        desktop: v
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Tablet', 'mrs-tabs-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions.tablet,
    onChange: v => setAttributes({
      responsiveConditions: {
        ...responsiveConditions,
        tablet: v
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile', 'mrs-tabs-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: responsiveConditions.mobile,
    onChange: v => setAttributes({
      responsiveConditions: {
        ...responsiveConditions,
        mobile: v
      }
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSettings);

/***/ }),

/***/ "./src/components/Tabs/mrsGeneralSettings.js":
/*!***************************************************!*\
  !*** ./src/components/Tabs/mrsGeneralSettings.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const GeneralSettings = ({
  tabTags,
  attributes,
  setAttributes
}) => {
  const {
    tabHeadingTagName,
    tabHorizontal
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.MenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, tabTags && tabTags.map((tag, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    key: i,
    className: "button-tags",
    onClick: () => setAttributes({
      tabHeadingTagName: tag
    })
  }, tag))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Tab Direction"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "tab-direction-button",
    onClick: () => setAttributes({
      tabHorizontal: false
    })
  }, "Horizontal ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: 'arrow-right-alt'
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    className: "tab-direction-button",
    onClick: () => setAttributes({
      tabHorizontal: true
    })
  }, "vertical ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    icon: 'arrow-down-alt'
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, ['left', 'center', 'right'].map((align, i) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: i,
      variant: "secondary",
      className: "mrs-editor-text-alignment-button",
      onClick: () => setAttributes({
        contentTextAlignment: align
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: `editor-align${align}`
    }));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    help: "Please select how much width you would like for tab.",
    initialPosition: 50,
    label: "Width",
    max: 800,
    min: 350,
    onChange: e => {
      setAttributes({
        tabsWidth: e
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/components/Tabs/mrsStyleSettings.js":
/*!*************************************************!*\
  !*** ./src/components/Tabs/mrsStyleSettings.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const StylesSettings = ({
  attributes,
  setAttributes
}) => {
  const {
    mrsActiveId,
    tabBtnType,
    tabBtnTextColor,
    tabBtnBgColor,
    tabBtnHoverTextColor,
    tabBtnHoverBgColor,
    tabBtnActiveTextColor,
    tabBtnActiveBgColor,
    tabContentColors,
    contentBorder,
    contentBorderObj,
    contentBorderRadius,
    contentPadding
  } = attributes;
  const onChangeContentColor = (value, type) => {
    if (type === 'titleColor') {
      const intActiveId = parseInt(mrsActiveId);
      const tabContentColor = tabContentColors?.find(t => parseInt(t.id) === intActiveId);
      const updateTabContentColor = {
        ...tabContentColor,
        'titleColor': value
      };
      const updateTabContentColorsCopy = tabContentColors.map(t => {
        if (parseInt(t.id) === intActiveId) {
          return updateTabContentColor;
        }
        return t;
      });
      setAttributes({
        tabContentColors: updateTabContentColorsCopy
      });
    }
    if (type === 'textColor') {
      const intActiveId = parseInt(mrsActiveId);
      const tabContentColor = tabContentColors?.find(t => parseInt(t.id) === intActiveId);
      const updateTabContentColor = {
        ...tabContentColor,
        'textColor': value
      };
      const updateTabContentColorsCopy = tabContentColors.map(t => {
        if (parseInt(t.id) === intActiveId) {
          return updateTabContentColor;
        }
        return t;
      });
      setAttributes({
        tabContentColors: updateTabContentColorsCopy
      });
    }
    if (type === 'bgColor') {
      const intActiveId = parseInt(mrsActiveId);
      const tabContentColor = tabContentColors?.find(t => parseInt(t.id) === intActiveId);
      const updateTabContentColor = {
        ...tabContentColor,
        'bgColor': value
      };
      const updateTabContentColorsCopy = tabContentColors.map(t => {
        if (parseInt(t.id) === intActiveId) {
          return updateTabContentColor;
        }
        return t;
      });
      setAttributes({
        tabContentColors: updateTabContentColorsCopy
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, "Styles Settings"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Button Settings', 'mrs-tabs-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "mrs-button-tab-alignment",
    variant: "primary",
    onClick: () => setAttributes({
      tabBtnType: 'primary'
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'mrs-tabs-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "mrs-button-tab-alignment",
    variant: "secondary",
    onClick: () => setAttributes({
      tabBtnType: 'secondary'
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'mrs-tabs-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "mrs-button-tab-alignment",
    variant: "secondary",
    onClick: () => setAttributes({
      tabBtnType: 'custom'
    }),
    style: {
      justifyContent: 'space-evenly'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom', 'mrs-tabs-block'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: 'admin-customizer'
  }))), tabBtnType && tabBtnType === 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Buttons Color Settings', 'mrs-tabs-block'),
    disableCustomColors: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Text Color', 'mrs-tabs-block'),
      value: tabBtnTextColor,
      onChange: value => {
        setAttributes({
          tabBtnTextColor: value
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Background Color', 'mrs-tabs-block'),
      value: tabBtnBgColor,
      onChange: value => {
        setAttributes({
          tabBtnBgColor: value
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Hover Text Color', 'mrs-tabs-block'),
      value: tabBtnHoverTextColor,
      onChange: value => {
        setAttributes({
          tabBtnHoverTextColor: value
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Hover Background Color', 'mrs-tabs-block'),
      value: tabBtnHoverBgColor,
      onChange: value => {
        setAttributes({
          tabBtnHoverBgColor: value
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Active Text Color', 'mrs-tabs-block'),
      value: tabBtnActiveTextColor,
      onChange: value => {
        setAttributes({
          tabBtnActiveTextColor: value
        });
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Active Background Color', 'mrs-tabs-block'),
      value: tabBtnActiveBgColor,
      onChange: value => {
        setAttributes({
          tabBtnActiveBgColor: value
        });
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Content Color Settings', 'mrs-tabs-block'),
    disableCustomColors: false,
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Content Title Color', 'mrs-tabs-block'),
      value: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.titleColor,
      onChange: value => {
        onChangeContentColor(value, 'titleColor');
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Content Text Color', 'mrs-tabs-block'),
      value: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.textColor,
      onChange: value => {
        onChangeContentColor(value, 'textColor');
      }
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Content Background Color', 'mrs-tabs-block'),
      value: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.bgColor,
      onChange: value => {
        onChangeContentColor(value, 'bgColor');
      }
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Border Settings', 'mrs-tabs-block'),
    checked: contentBorder,
    onChange: () => setAttributes({
      contentBorder: !contentBorder
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), contentBorder && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Border Color', 'mrs-tabs-block'),
    value: contentBorderObj,
    onChange: newBorder => setAttributes({
      contentBorderObj: newBorder
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select how border radius you would like in Tab Container would be.', 'mrs-tabs-block'),
    initialPosition: 0,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'mrs-tabs-block'),
    max: 50,
    min: 0,
    onChange: value => {
      setAttributes({
        contentBorderRadius: value
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: contentPadding,
    onChange: newPadding => setAttributes({
      contentPadding: newPadding
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StylesSettings);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _components_Tabs_mrsGeneralSettings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Tabs/mrsGeneralSettings.js */ "./src/components/Tabs/mrsGeneralSettings.js");
/* harmony import */ var _components_Tabs_mrsStyleSettings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Tabs/mrsStyleSettings.js */ "./src/components/Tabs/mrsStyleSettings.js");
/* harmony import */ var _components_Tabs_mrsAdvanceSettings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Tabs/mrsAdvanceSettings.js */ "./src/components/Tabs/mrsAdvanceSettings.js");









function Edit({
  attributes,
  setAttributes
}) {
  const {
    mrsActiveId,
    tabsTitle,
    tabsContent,
    tabHorizontal,
    settingsPanelState,
    tabsWidth,
    contentTextAlignment,
    tabBtnTextColor,
    tabBtnBgColor,
    tabBtnHoverTextColor,
    tabBtnHoverBgColor,
    tabBtnActiveTextColor,
    tabBtnActiveBgColor,
    tabBtnType,
    tabHeadingTagName,
    tabContentColors,
    contentBorder,
    contentBorderObj,
    contentBorderRadius,
    contentPadding
  } = attributes;
  const [toggleTab, setToggleTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const tabTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'];
  const toggleTabChange = val => {
    setToggleTab(val);
    setAttributes({
      mrsActiveId: val
    });
  };
  const onTabsTitleChange = (index, type, value) => {
    const tabTitle = tabsTitle?.find(t => parseInt(t.id) === parseInt(index) + 1);
    const updatedTabTitle = {
      ...tabTitle,
      title: value
    };
    const updatedTabsTitle = tabsTitle?.map(t => {
      if (parseInt(t.id) === parseInt(tabTitle.id)) {
        return updatedTabTitle;
      }
      ;
      return t;
    });
    setAttributes({
      tabsTitle: updatedTabsTitle
    });
  };
  const onTabsContentChange = (index, type, value) => {
    if (type === 'content') {
      const tabContent = tabsContent.find(t => parseInt(t.id) === parseInt(index) + 1);
      const updateTabContent = {
        ...tabContent,
        content: value
      };
      const updatedTabsContent = tabsContent?.map(t => {
        if (parseInt(t.id) === parseInt(tabContent.id)) {
          return updateTabContent;
        } else {
          return t;
        }
      });
      setAttributes({
        tabsContent: updatedTabsContent
      });
    }
    if (type === 'title') {
      const tabContent = tabsContent.find(t => parseInt(t.id) === parseInt(index) + 1);
      const updateTabContent = {
        ...tabContent,
        title: value
      };
      const updatedTabsContent = tabsContent?.map(t => {
        if (parseInt(t.id) === parseInt(tabContent.id)) {
          return updateTabContent;
        } else {
          return t;
        }
      });
      setAttributes({
        tabsContent: updatedTabsContent
      });
    }
  };
  const onClickAddTabs = () => {
    setAttributes({
      tabsTitle: [...tabsTitle, {
        'id': tabsTitle.length + 1,
        'title': 'Tabs' + (tabsTitle.length + 1)
      }],
      tabsContent: [...tabsContent, {
        'id': tabsContent.length + 1,
        'content': ''
      }],
      tabContentColors: [...tabContentColors, {
        "id": tabContentColors.length + 1,
        'titleColor': '#000000',
        'textColor': '#303030',
        'bgColor': '#ffffff'
      }]
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tab Panel Settings', 'mrs-tabs-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControl, {
    isBlock: true,
    value: settingsPanelState,
    onChange: state => setAttributes({
      settingsPanelState: state
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
    label: "General",
    value: "general"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
    label: "Styles",
    value: "styles"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
    label: "Advanced",
    value: "advanced"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalDivider, null), settingsPanelState === 'general' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Tabs_mrsGeneralSettings_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabTags: tabTags,
    attributes: attributes,
    setAttributes: setAttributes
  }), settingsPanelState === 'styles' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Tabs_mrsStyleSettings_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), settingsPanelState === 'advanced' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Tabs_mrsAdvanceSettings_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabHorizontal ? 'tab tab-vertical' : 'tab tab-horizontal',
    style: {
      width: tabsWidth + 'px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "mrs-tab-list",
    style: {
      color: tabBtnTextColor,
      backgroundColor: tabBtnBgColor
    }
  }, tabsTitle && tabsTitle.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      id: `tab-${index + 1}`,
      className: toggleTab === index + 1 ? 'active' : '',
      onClick: () => toggleTabChange(index + 1),
      style: {
        color: toggleTab === index + 1 ? tabBtnActiveTextColor : '',
        backgroundColor: toggleTab === index + 1 ? tabBtnActiveBgColor : '',
        '--hover-bg-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverBgColor : tabBtnActiveBgColor,
        '--hover-text-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverTextColor : tabBtnActiveTextColor
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: tab.title,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'mrs-block-tabs'),
      onChange: newTitle => onTabsTitleChange(index, 'title', newTitle)
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    onClick: onClickAddTabs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    icon: 'plus'
  }))), tabsContent && tabsContent.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "tab-container",
      style: {
        display: parseInt(tab.id) === parseInt(mrsActiveId) ? 'block' : 'none',
        textAlign: contentTextAlignment,
        background: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.bgColor,
        border: contentBorder && `${contentBorderObj?.width} ${contentBorderObj?.style} ${contentBorderObj?.color}`,
        borderRadius: contentBorder && contentBorderRadius && contentBorderRadius + 'px',
        paddingTop: contentPadding?.top,
        paddingLeft: contentPadding?.left,
        paddingBottom: contentPadding?.bottom,
        paddingRight: contentPadding?.right
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: `tab-${index + 1}`,
      className: toggleTab === index + 1 ? 'tab-content active' : 'tab-content'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Tabs Title', 'mrs-tabs-block'),
      value: tab.title,
      onChange: newContentTitle => onTabsContentChange(index, 'title', newContentTitle),
      tagName: tabHeadingTagName,
      style: {
        color: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.titleColor
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Tabs Content', 'mrs-tabs-block'),
      value: tab.content,
      tagName: "p",
      onChange: newContent => onTabsContentChange(index, 'content', newContent),
      style: {
        color: tabContentColors?.find(t => parseInt(t.id) === parseInt(mrsActiveId))?.textColor
      }
    })));
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    tabHorizontal,
    tabsWidth,
    tabBtnTextColor,
    tabBtnBgColor,
    tabsTitle,
    tabBtnActiveTextColor,
    tabBtnActiveBgColor,
    tabBtnType,
    tabBtnHoverBgColor,
    tabBtnHoverTextColor,
    tabsContent,
    mrsActiveId,
    contentTextAlignment,
    tabContentColors,
    contentBorder,
    contentBorderObj,
    contentBorderRadius,
    contentPadding,
    tabHeadingTagName
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tabHorizontal ? 'tab tab-vertical' : 'tab tab-horizontal',
    style: {
      width: tabsWidth + 'px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "mrs-tab-list",
    style: {
      color: tabBtnTextColor,
      backgroundColor: tabBtnBgColor
    }
  }, tabsTitle?.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: 'mrs-tab-list-li',
      style: {
        '--hover-bg-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverBgColor : tabBtnActiveBgColor
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: `#tab-${index + 1}`,
      style: {
        '--hover-text-color': tabBtnType && tabBtnType === 'custom' ? tabBtnHoverTextColor : tabBtnActiveTextColor
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: tab.title
    })));
  })), tabsContent?.map((tab, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "tab-container",
      style: {
        textAlign: contentTextAlignment,
        background: tabContentColors?.find(t => parseInt(t.id) === parseInt(tab.id))?.bgColor,
        border: contentBorder && `${contentBorderObj?.width} ${contentBorderObj?.style} ${contentBorderObj?.color}`,
        borderRadius: contentBorder && contentBorderRadius && contentBorderRadius + 'px',
        paddingTop: contentPadding?.top,
        paddingLeft: contentPadding?.left,
        paddingBottom: contentPadding?.bottom,
        paddingRight: contentPadding?.right
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: `tab-${index + 1}`,
      className: 'tab-content'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: tab.title,
      tagName: tabHeadingTagName,
      style: {
        color: tabContentColors?.find(t => parseInt(t.id) === parseInt(tab.id))?.titleColor
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: tab.content,
      tagName: "p",
      style: {
        color: tabContentColors?.find(t => parseInt(t.id) === parseInt(tab.id))?.textColor
      }
    })));
  })));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mrs-block/mrs-tabs-block","version":"0.1.0","title":"MRS Tabs Block","category":"mrs-block","icon":"table-row-after","description":"A simple block that displays multiple tabs in a row.","example":{},"supports":{"html":false},"textdomain":"mrs-tabs-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"tabsName":{"type":"string","default":"tabes"},"mrsActiveId":{"type":"string","default":"1"},"tabsTitle":{"type":"array","default":[{"id":"1","title":"tab1"},{"id":"2","title":"tab2"},{"id":"3","title":"tab3"}]},"tabsContent":{"type":"array","default":[{"id":"1","title":"","content":""},{"id":"2","title":"","content":""},{"id":"3","title":"","content":""}]},"tabHorizontal":{"type":"boolean","default":false},"settingsPanelState":{"type":"string","default":"general"},"tabHeadingTagName":{"type":"string","default":"h4"},"contentTextAlignment":{"type":"string","default":"left"},"tabsWidth":{"type":"number","default":620},"tabBtnType":{"type":"string","default":"primary"},"tabBtnTextColor":{"type":"string","default":"#ffffff"},"tabBtnBgColor":{"type":"string","default":"#007cba"},"tabBtnHoverTextColor":{"type":"string","default":"#007cba"},"tabBtnHoverBgColor":{"type":"string","default":"#ffffff"},"tabBtnActiveTextColor":{"type":"string","default":"#007cba"},"tabBtnActiveBgColor":{"type":"string","default":"#ffffff"},"tabContentColors":{"type":"array","default":[{"id":"1","titleColor":"#000000","textColor":"#000000","bgColor":"#ffffff"},{"id":"2","titleColor":"#000000","textColor":"#000000","bgColor":"#ffffff"},{"id":"3","titleColor":"#000000","textColor":"#000000","bgColor":"#ffffff"}]},"contentBorder":{"type":"boolean","default":false},"contentBorderObj":{"type":"object","default":{"color":"#000000","style":"solid","width":"1px"}},"contentBorderRadius":{"type":"number","default":0},"contentPadding":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"responsiveConditions":{"type":"object","default":{"desktop":false,"tablet":false,"mobile":false}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmrs_tabs_block"] = globalThis["webpackChunkmrs_tabs_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map