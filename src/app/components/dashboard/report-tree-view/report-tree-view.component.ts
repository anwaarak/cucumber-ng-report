import { Result } from './../../../Dummy model/Result';
import { Step } from './../../../Dummy model/Step';
import { Elements } from './../../../Dummy model/Elements';
import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Description } from '../../../Dummy model/Description';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

  interface TreeNode {
    name: string;
    children?: TreeNode[];
  }

function abc(){
  return <JSON><unknown>
  [
    {
        "id": "account-holder-withdraws-cash",
        "tags": [
            {
                "name": "@featureTag",
                "line": 1
            }
        ],
        "description": "This is description of the feature",
        "name": "1st feature",
        "keyword": "Feature",
        "line": 2,
        "elements": [
            {
                "description": "Perfect background",
                "name": "Activate Credit Card",
                "keyword": "Background",
                "line": 7,
                "steps": [
                    {
                        "result": {
                            "duration": 99107447000,
                            "status": "passed"
                        },
                        "name": "I have a new credit card",
                        "keyword": "Given ",
                        "line": 8,
                        "match": {
                            "location": "ATMScenario.I_have_a_new_credit_card()"
                        },
                        "embeddings": [
                            {
                                "mime_type": "image/url",
                                "data": "aHR0cDovL2xvY2FsaG9zdC9zdGF0aWMvbG9nby5wbmc="
                            },
                            {
                                "data": "file:///path/to/index.html",
                                "media": {
                                    "type": "text/plain"
                                }
                            }
                        ]
                    },
                    {
                        "result": {
                            "duration": 9520000,
                            "status": "passed"
                        },
                        "name": "My credit card is described as follow:",
                        "keyword": "And ",
                        "line": 9,
                        "match": {
                            "location": "ATMScenario.My_credit_card_is_described_as_follow"
                        },
                        "doc_string": {
                            "content_type": "",
                            "line": 10,
                            "value": "{\n\"issuer\": {\n\"name\": \"Real Bank Inc.\",\n\"isn:\": \"RB55800093842N\"\n},\n\"card_number\": \"4896 0215 8478 6325\",\n\"holder\": \"A guy\"\n}"
                        }
                    },
                    {
                        "result": {
                            "duration": 7040000,
                            "status": "passed"
                        },
                        "name": "I confirm my pin number",
                        "keyword": "When ",
                        "line": 18,
                        "match": {
                            "location": "ATMScenario.I_confirm_my_pin_number()"
                        },
                        "rows": [
                            {
                                "cells": [
                                    "Müller",
                                    "Deutschland"
                                ],
                                "line": 2
                            },
                            {
                                "cells": [
                                    "Nováková",
                                    "Česko"
                                ],
                                "line": 3
                            },
                            {
                                "cells": [
                                    "Kovačević",
                                    "Hrvatska"
                                ],
                                "line": 4
                            },
                            {
                                "cells": [
                                    "Παπαδόπουλος",
                                    "Παπαδόπουλος"
                                ],
                                "line": 5
                            },
                            {
                                "cells": [
                                    "罗/羅",
                                    "中國"
                                ],
                                "line": 6
                            }
                        ]
                    },
                    {
                        "result": {
                            "duration": 111111,
                            "status": "passed"
                        },
                        "name": "the card should be activated",
                        "keyword": "Then ",
                        "line": 19,
                        "match": {
                            "location": "ATMScenario.the_card_should_be_activated()"
                        }
                    }
                ],
                "type": "background"
            },
            {
                "id": "account-holder-withdraws-cash;account-has-\u0027sufficient-funds\u0027;;2",
                "tags": [
                    {
                        "name": "@fast",
                        "line": 21
                    },
                    {
                        "name": "@featureTag",
                        "line": 1
                    },
                    {
                        "name": "@checkout",
                        "line": 21
                    }
                ],
                "description": "Account holder withdraws cash",
                "name": "Account has <sufficient funds>",
                "keyword": "Scenario Outline",
                "line": 33,
                "steps": [
                    {
                        "result": {
                            "duration": 17007000,
                            "status": "passed"
                        },
                        "name": "the account balance is 100",
                        "keyword": "Given ",
                        "line": 23,
                        "match": {
                            "arguments": [
                                {
                                    "val": "100",
                                    "offset": 23
                                }
                            ],
                            "location": "ATMScenario.createAccount(int)"
                        }
                    },
                    {
                        "result": {
                            "duration": 33444444,
                            "status": "passed"
                        },
                        "name": "the card is valid",
                        "keyword": "And ",
                        "line": 24,
                        "match": {
                            "arguments": [
                                {
                                    "val": "",
                                    "offset": 0
                                }
                            ],
                            "location": "ATMScenario.createCreditCard()"
                        }
                    },
                    {
                        "result": {
                            "duration": 44333333,
                            "status": "passed"
                        },
                        "name": "100 is contained in the machine",
                        "keyword": "And ",
                        "line": 25,
                        "match": {
                            "arguments": [
                                {
                                    "val": "100",
                                    "offset": 0
                                }
                            ],
                            "location": "ATMScenario.createATM(int)"
                        },
                        "matchedColumns": [
                            1
                        ]
                    },
                    {
                        "result": {
                            "duration": 11000001,
                            "status": "passed"
                        },
                        "name": "the Account Holder requests 10, entering PIN 1234",
                        "keyword": "When ",
                        "line": 26,
                        "match": {
                            "arguments": [
                                {
                                    "val": "10",
                                    "offset": 28
                                },
                                {
                                    "val": "1234",
                                    "offset": 45
                                }
                            ],
                            "location": "ATMScenario.requestMoney(int)"
                        },
                        "matchedColumns": [
                            2
                        ]
                    },
                    {
                        "result": {
                            "duration": 3220000,
                            "status": "passed"
                        },
                        "name": "the ATM should dispense 10 monetary units",
                        "keyword": "Then ",
                        "line": 27,
                        "match": {
                            "arguments": [
                                {
                                    "val": "10",
                                    "offset": 24
                                },
                                {
                                    "val": "",
                                    "offset": 0
                                }
                            ],
                            "location": "ATMScenario.checkMoney(int)"
                        },
                        "matchedColumns": [
                            3
                        ]
                    },
                    {
                        "result": {
                            "duration": 30000000,
                            "status": "passed"
                        },
                        "name": "the account balance should be 90",
                        "keyword": "And ",
                        "line": 28,
                        "arguments": [
                            {
                                "rows": [
                                    {
                                        "cells": [
                                            "max",
                                            "min"
                                        ]
                                    },
                                    {
                                        "cells": [
                                            "20",
                                            "3"
                                        ]
                                    }
                                ]
                            }
                        ],
                        "match": {
                            "location": "ATMScenario.checkBalance(int)"
                        },
                        "matchedColumns": [
                            2
                        ]
                    }
                ],
                "type": "scenario",
                "after": [
                    {
                        "result": {
                            "duration": 60744700,
                            "status": "passed",
                            "error_message": "Completed"
                        },
                        "match": {
                            "location": "MachineFactory.timeout()"
                        }
                    }
                ]
            }
        ],
        "uri": "net/masterthought/example(s)/ATM:東京.feature"
    },
    {
        "id": "account-holder-withdraws-more-cash",
        "description": "As an Account Holder\nI want to withdraw cash from an ATM,<br/>so that I can get money when the bank is closed",
        "name": "Second feature",
        "keyword": "Feature",
        "line": 1,
        "elements": [
            {
                "id": "account-holder-withdraws-more-cash;account-has-sufficient-funds;;2",
                "tags": [
                    {
                        "name": "@checkout",
                        "line": 101
                    }
                ],
                "before": [
                    {
                        "output": [
                            "System version: beta3"
                        ],
                        "result": {
                            "duration": 10744700,
                            "status": "passed"
                        },
                        "match": {
                            "location": "MachineFactory.findCashMachine()"
                        }
                    },
                    {
                        "result": {
                            "duration": 1000001,
                            "status": "failed",
                            "error_message": "   \n"
                        },
                        "match": {
                            "location": "MachineFactory.wait()"
                        }
                    }
                ],
                "description": "Account holder withdraws more cash",
                "name": "Account may not have sufficient funds",
                "keyword": "Scenario Outline",
                "line": 19,
                "steps": [
                    {
                        "result": {
                            "status": "undefined"
                        },
                        "name": "the account balance is 100",
                        "keyword": "Given ",
                        "line": 7,
                        "match": {
                            "arguments": [
                                {
                                    "val": "100",
                                    "offset": 23
                                },
                                {}
                            ]
                        },
                        "matchedColumns": [
                            0
                        ],
                        "before": [
                            {
                                "embeddings": [
                                    {
                                        "mime_type": "text/plain",
                                        "data": "amF2YS5sYW5nLlRocm93YWJsZQ=="
                                    }
                                ],
                                "result": {
                                    "duration": 410802047,
                                    "status": "failed"
                                }
                            }
                        ]
                    },
                    {
                        "result": {
                            "duration": 13000,
                            "status": "passed"
                        },
                        "name": "the card is valid",
                        "keyword": "And ",
                        "line": 8,
                        "match": {
                            "arguments": [
                                {
                                    "val": "",
                                    "offset": 17
                                }
                            ],
                            "location": "ATMScenario.createCreditCard()"
                        },
                        "after": [
                            {
                                "result": {
                                    "duration": 410802048,
                                    "status": "passed"
                                },
                                "match": {
                                    "location": "StepHook.afterStep()"
                                }
                            }
                        ]
                    },
                    {
                        "result": {
                            "duration": 36000,
                            "status": "passed"
                        },
                        "name": "the machine contains 100",
                        "keyword": "And ",
                        "line": 9,
                        "match": {
                            "arguments": [
                                {
                                    "val": "100",
                                    "offset": 21
                                }
                            ],
                            "location": "ATMScenario.createATM(int)"
                        },
                        "matchedColumns": [
                            1
                        ]
                    },
                    {
                        "result": {
                            "duration": 32000,
                            "status": "passed"
                        },
                        "name": "the Account Holder requests 20",
                        "keyword": "When ",
                        "line": 10,
                        "match": {
                            "arguments": [
                                {
                                    "val": "20",
                                    "offset": 28
                                }
                            ],
                            "location": "ATMScenario.requestMoney(int)"
                        },
                        "matchedColumns": [
                            2
                        ]
                    },
                    {
                        "result": {
                            "duration": 36000,
                            "status": "passed"
                        },
                        "name": "the ATM should dispense 20",
                        "keyword": "Then ",
                        "line": 11,
                        "match": {
                            "arguments": [
                                {
                                    "val": "20",
                                    "offset": 24
                                }
                            ],
                            "location": "ATMScenario.checkMoney(int)"
                        },
                        "matchedColumns": [
                            3
                        ]
                    },
                    {
                        "result": {
                            "duration": 1933000,
                            "status": "skipped",
                            "error_message": "java.lang.AssertionError: \nExpected: is \u003c80\u003e\n     got: \u003c90\u003e\n\n\tat org.junit.Assert.assertThat(Assert.java:780)\n\tat org.junit.Assert.assertThat(Assert.java:738)\n\tat net.masterthought.example.ATMScenario.checkBalance(ATMScenario.java:69)\n\tat ✽.And the account balance should be 90(net/masterthought/example/ATMK.feature:12)\n"
                        },
                        "name": "the account balance should be 90",
                        "keyword": "And ",
                        "line": 12,
                        "match": {
                            "arguments": [
                                {
                                    "val": "90",
                                    "offset": 30
                                }
                            ],
                            "location": "ATMScenario.checkBalance(int)"
                        },
                        "matchedColumns": [
                            4
                        ],
                        "embeddings": [
                            {
                                "mime_type": "image/png",
                                "data": "iVBORw0KGgoAAAANSUhEUgAAACwAAAE+CAIAAAB5j2VyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEVSURBVHhe7c6hAYAwEMDAhzkqu/9m7ICAzFBzZ2JzPWvPafffo0zEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzEREzExGfmBTSnA6klpvCvAAAAAElFTkSuQmCC",
                                "name": "Some PNG image"
                            },
                            {
                                "mime_type": "image/jpeg",
                                "data": "/9j/4AAQSkZJRgABAQEAYABgAAD/4QBaRXhpZgAATU0AKgAAAAgABQMBAAUAAAABAAAASgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAOw1ESAAQAAAABAAAOwwAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADUBngMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AMeiiiv74P8AKMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k="
                            },
                            {
                                "mime_type": "text/plain",
                                "data": "amF2YS5sYW5nLlRocm93YWJsZQ=="
                            },
                            {
                                "mime_type": "text/html",
                                "data": "PGh0bWw+PGhlYWQ+PC9oZWFkPjxib2R5PjxwPjxpPkhlbGxvPC9pPiA8Yj5Xb3JsZCE8L2I+PC9wPjxwPlRoZSB3aWtpcGVkaWEgbG9nbyBzaG91bGQgYXBwZWFyIGJlbG93PC9wPjxpbWcgc3JjPSJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvc3RhdGljL2ltYWdlcy9wcm9qZWN0LWxvZ29zL2Vud2lraS5wbmciPjwvYm9keT48L2h0bWw+",
                                "name": "Some HTML embedding"
                            },
                            {
                                "mime_type": "text/xml",
                                "data": "PD94bWwgdmVyc2lvbj0iMS4wIj8+DQo8eG1sPg0KICA8c29tZU5vZGUgYXR0cj0idmFsdWUiIC8+DQo8L3htbD4="
                            },
                            {
                                "mime_type": "image/svg+xml",
                                "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsKCTwhRU5USVRZIHN0MCAiZmlsbDojMzMzMzMzOyI+Cl0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iJnN0MDsiIGQ9Ik0yMy4xMzIsMTIuMDEyYzAsNi4xNjktNC45OTcsMTEuMjE5LTExLjE2NCwxMS4yMTljLTYuMTc4LDAtMTEuMTc1LTUuMDUtMTEuMTc1LTExLjIxOQoJYzAtNi4xNzgsNC45OTctMTEuMTczLDExLjE3NS0xMS4xNzNDMTguMTM2LDAuODM5LDIzLjEzMiw1LjgzNSwyMy4xMzIsMTIuMDEyIE0xNC43NTYsMjEuMTMyYzMuODI3LTEuMzY4LDYuNjI2LTQuODk5LDYuNjI2LTkuMTIKCWMwLTUuMjAyLTQuMjItOS40MjUtOS40MTQtOS40MjVjLTUuMjA0LDAtOS40MjYsNC4yMjMtOS40MjYsOS40MjVjMCw0LjI2NCwyLjg0NCw3LjgxOCw2LjczNiw5LjEydi0xLjc5MwoJYzAtMS4wNzIsMC40NDgtMS42NCwwLjg5Ni0xLjk0NmMtMi40MjctMC4yNTMtNS4wMy0xLjEyOC01LjAzLTUuMzI3YzAtMS4xNzcsMC40MTYtMi4xNDEsMS4xMDUtMi44ODUKCUM2LjE0MSw4Ljg5Nyw1Ljc4LDcuODA1LDYuMzU5LDYuMzI4YzAsMCwwLjkwOC0wLjI5NSwyLjk2MywxLjEwNWMwLjg1My0wLjI0MSwxLjc4My0wLjM2MSwyLjY4OS0wLjM2MQoJYzAuOTE4LDAsMS44MzgsMC4xMTksMi43MDEsMC4zNjFjMi4wNTYtMS40LDIuOTUyLTEuMTA1LDIuOTUyLTEuMTA1YzAuNTksMS40NzcsMC4yMTksMi41NjksMC4xMSwyLjg1MwoJYzAuNjg5LDAuNzQ0LDEuMTA1LDEuNzA4LDEuMTA1LDIuODg1YzAsNC4xOTktMi42MDMsNS4wNzQtNS4wMyw1LjMyN2MwLjQ0NywwLjMwNiwwLjkwNywwLjg3NCwwLjkwNywxLjk0NlYyMS4xMzJ6Ii8+Cjwvc3ZnPgo="
                            },
                            {
                                "mime_type": "js",
                                "data": "ZnVuY3Rpb24gbG9nZ2VyKG1lc3NhZ2UpIHsNCiAgY29uc29sZS5sb2cobWVzc2FnZSk7DQp9"
                            },
                            {
                              "mime_type": "text/plain",
                              "data": "Not Base64 Encoded String"
                            },
                            {
                                "mime_type": "text/csv",
                                "data": "MSwyLDMKb25lLHR3byx0aHJlZQp1bnUgLGR1LHRyaQo="
                            }
                        ]
                    },
                    {
                        "result": {
                            "status": "pending"
                        },
                        "name": "the card should be returned",
                        "keyword": "And ",
                        "line": 13,
                        "match": {
                            "location": "ATMScenario.cardShouldBeReturned()"
                        },
                        "embeddings": [
                            {
                                "mime_type": "application/json",
                                "data": "ew0KICAibW9kZWwiIDogIjEzNGIyIiwNCiAgInByaWNlIiA6IHsNCiAgICAidmFsdWUiIDogMTAwMDAwLA0KICAgICJjdXJyZW5jeSIgOiAiJCINCiAgfSwNCiAgIm5vdGVzIiA6IG51bGwNCn0="
                            }
                        ]
                    },
                    {
                        "result": {
                            "status": "skipped"
                        },
                        "name": "its not implemented",
                        "keyword": "And ",
                        "line": 14,
                        "match": {
                            "location": "ATMScenario.its_not_implemented()"
                        },
                        "output": [
                            [
                                "Could not connect to the server @Rocky@"
                            ],
                            [
                                "Could not connect to the server @Mike@"
                            ]
                        ]
                    },
                    {
                        "result": {
                            "status": "failed"
                        },
                        "name": "the card is valid",
                        "keyword": "And ",
                        "line": 15,
                        "match": {
                            "location": "ATMScenario.createCreditCard()"
                        },
                        "output": [
                            "Checkpoints",
                            232
                        ]
                    },
                    {
                        "result": {
                            "duration": 90000000,
                            "status": "ambiguous"
                        },
                        "name": "the card should be returned",
                        "keyword": "And ",
                        "line": 29,
                        "match": {
                            "location": "ATMScenario.cardShouldBeReturned()"
                        }
                    }
                ],
                "type": "scenario",
                "after": [
                    {
                        "result": {
                            "duration": 64700000,
                            "status": "undefined",
                            "error_message": "Undefined step"
                        },
                        "match": {
                            "location": "any.error()"
                        },
                        "embeddings": [
                            {
                                "mime_type": "image/png",
                                "data": "iVBORw0KGgoAAAANSUhEUgAAAHgAAAB2CAIAAACMDMD1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMoSURBVHhe7dZBbttAEETRHCTL3CPbHD5XyRmcRlgRhDI57LHI6qZYH7XzNAW8lb99OEmGFmVoUYYWZWhRhhZlaFGGFmVoUYYWZWhRhhZlaFGGFmVoUYYWZWhRhhb1KvSf7z8GwyNnaFnnQsfw7vadDh3D03tnaFEK6Bhe3zgRdAwHd83Qol6FXiLTreH1LZNCx3Bwv46Bjgh0MBzcrMOgIwLdGl7frALoZbi5TUdCR6S5O5yd1s9fv7eGF6oOho6Icnc4OzQyXR2eqqqHjuHy5YhyPNyoOh46IsfMcPnVCDEzXKo6BToix8xwORnx5Yd7VWdBR+SYHI7TEV9+uFfVDjqG+70Ibnb4iqoToZcIMTkcDyO42eErqk6HXiLH/HC/FsFNDZ8QJoKOSDA/3D9FavnhviIddESC+eH+f8S3O5yVJoWOSDA/3E8q46ZBauiIBJPDcRoar9tUAL1EjpnFFWkOtvxKn8qgI3LcHVFuDV9vViV0RJSDkeZg+HSziqEfESuNKMfDF5vVBToi3MfIcTB8qGWNoCMijhHlePhKy3pBR2+pHDWFJsTMcN+1dtDElxyOG9cLmviSw3HvWkAT3NTwifbVQxPc1PCJK1QMTXBTwycuUiU0wU1t+ecEH7pCZdAEN7VF+VrWNdAEl98z8WP4aO/U0ASXH+HS8PXGSaHJLj9iXR1+o2utoZcrAh1sed8zHTQh7g5nM9Ax3PRLBE2Iu8PZv4hydzhrVkdo3DxFlLvDWacU0OQ4Hm4+RZTj4aZTp0OT43i42Yg0x8NNm7pA4/VepDkebnrUAhpPc5HmYDjo0fWgIwIdDAcNqofGu8kIdGt43aBiaDz6UmS6Ojxt0IWhI2JdHZ5WVwmNFy9EpqvD0+rKoPHnlyPWz8O76i4PHZEsDY+qOx1aEMnS8Ki6d4COCPd5eFGdoUUZWtSbQEfk+xj+XN37QDfP0KIMLcrQogwtytCiDC3K0KIMLcrQogwtytCiDC3K0KIMLcrQogwtytCiDC3K0KIMLcrQogwtytCiDC3K0KIMLcrQogwtytCiDC3K0KIMLcrQogwtytCSPj7+Av1TVHaIlvxNAAAAAElFTkSuQmCC"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "account-holder-withdraws-more-cash;clean-up",
                "name": "Clean-up",
                "keyword": "Scenario",
                "line": 31,
                "steps": [
                    {
                        "result": {
                            "duration": 560000,
                            "status": "passed"
                        },
                        "name": "Stream closing",
                        "keyword": "Given ",
                        "line": 32
                    }
                ],
                "type": "scenario"
            },
            {
                "id": "undefined-result",
                "name": "This step has no result...",
                "keyword": "Scenario",
                "line": 35,
                "steps": [
                    {
                        "name": " - even it should",
                        "keyword": "Given ",
                        "line": 36
                    }
                ],
                "type": "scenario"
            }
        ],
        "uri": "net/masterthought/example/ATMK.feature"
    }
]

}

let TREE_DATA: TreeNode[] = [];

//Receive raw json and construct tree
function constructTree(json: JSON) {
  let parsedJson: Description[] = JSON.parse(JSON.stringify(abc()));
   // console.log((parsedJson[0].elements[0].description))
    for(let i = 0; i < parsedJson.length; ++i) {
      TREE_DATA.push(parseDescription(parsedJson[i]));
    }
  }

function parseDescription(d: Description) {
  let parent: TreeNode = {name: null, children: []};
  parent.name = d.description;
  for(let i= 0; i < d.elements.length; ++i) {
    let element: TreeNode = parseElement(d.elements[i]);
    parent.children.push(element);
  }
  return parent;
}

function parseElement(e: Elements) {
  let parent: TreeNode = {name: null, children: []};
  if(e.description)
    parent.name = e.description;
  else
    parent.name = "Element Decription"
  for(let i= 0; i < e.steps.length; ++i) {
    let step: TreeNode = parseStep(e.steps[i]);
    parent.children.push(step);
  }
  return parent;
}

function parseStep(s: Step) {
  let parent: TreeNode = {name: null, children: []};
  parent.name = "Steps";
  if(s.result) {
    let result: TreeNode = parseResult(s.result);
    parent.children.push(result);
  } else {
    parent.children.push({name: "No matching results"})
  }
  return parent;
}

function parseResult(r: Result) {
  let parent: TreeNode = {name: null, children: []};
  let child1: TreeNode = {name: null};
  let child2: TreeNode = {name: null};

  if(r.duration)
    child1.name = "" + r.duration;
  else
    child1.name = "No duration"
  if(r.status)
    child2.name = r.status;
  else
    child2.name = "undefined"

  parent.name = "Result";
  parent.children.push(child1);
  parent.children.push(child2);
  return parent;
}

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})

export class ReportTreeViewComponent implements OnInit {

   description: any = [];

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor( private _dataService: DataService,
    private _router: Router,
    private http: HttpClient ) {
    constructTree(null)
    //parse(abc());
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.getDescription();

  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  getDescription(){
     this._dataService.getDescription()
        .subscribe(data => {
          console.log(data);
          this.description = data;
        },
         error => console.log(error));
  }
  }



/*
import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'app-report-tree-view',
  templateUrl: './report-tree-view.component.html',
  styleUrls: ['./report-tree-view.component.css']
})


export class ReportTreeViewComponent implements OnInit {


  report: any = {};
  steps: any = {};


  constructor() {
  }

  ngOnInit(): void {
    this.report = resData;
    this.steps = resData.elements[0].steps[0];
  }
  }


  const resData =  {

        "description": "This is description of the feature",
        "elements": [
            {
                "description": "Perfect background",
                "steps": [
                    {
                        "result": {
                            "duration": 99107447000,
                            "status": "passed"
                        }
						}]
						}]

  }*/
