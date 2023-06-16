jQuery("#simulation")
  .on("click", ".s-8d45484c-72d7-478c-a14e-731d4ac9c871 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "996.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "946.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "893.0"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "842.0"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_1" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_10 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_7 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_5 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_4 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_11 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_9 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_8 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_6 > .borderLayer",
                  "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CCCCCC",
                      "border-right-color": "#CCCCCC",
                      "border-bottom-color": "#CCCCCC",
                      "border-left-color": "#CCCCCC"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Rectangle_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#1EAAF1",
                      "border-right-color": "#1EAAF1",
                      "border-bottom-color": "#1EAAF1",
                      "border-left-color": "#1EAAF1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Button_1" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Button_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/83047eba-7d51-4b68-813d-9206931945c0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-8d45484c-72d7-478c-a14e-731d4ac9c871 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-8d45484c-72d7-478c-a14e-731d4ac9c871 #s-Path_6 svg" ],
                      "attributes": {
                        "path-background-color": "#6A6D7D"
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });