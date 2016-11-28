var handlebars = require('handlebars'),
    fs = require('fs');

var data = {
	"id": 0,
	"kind": 0,
	"flags": {},
	"children": [
		{
			"id": 1,
			"name": "\"angular\"",
			"kind": 1,
			"kindString": "External module",
			"flags": {
				"isExported": true
			},
			"originalName": "C:/Users/yochoi/Documents/GitHub/doc-test/app/angular.ts",
			"children": [
				{
					"id": 2,
					"name": "Angular",
					"kind": 128,
					"kindString": "Class",
					"flags": {},
					"comment": {
						"shortText": "This describes what the angular class does"
					},
					"children": [
						{
							"id": 4,
							"name": "kind",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isPrivate": true
							},
							"sources": [
								{
									"fileName": "angular.ts",
									"line": 7,
									"character": 16
								}
							],
							"type": {
								"type": "instrinct",
								"name": "string"
							}
						},
						{
							"id": 3,
							"name": "version",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isPrivate": true
							},
							"comment": {
								"shortText": "The x coordinate"
							},
							"sources": [
								{
									"fileName": "angular.ts",
									"line": 6,
									"character": 19
								}
							],
							"type": {
								"type": "instrinct",
								"name": "string"
							}
						},
						{
							"id": 5,
							"name": "getY",
							"kind": 2048,
							"kindString": "Method",
							"flags": {},
							"signatures": [
								{
									"id": 6,
									"name": "getY",
									"kind": 4096,
									"kindString": "Call signature",
									"flags": {},
									"comment": {
										"shortText": "Get the y value.",
										"returns": "The y value.",
										"tags": [
											{
												"tag": "whatthe",
												"text": "Is this what\n"
											}
										]
									},
									"type": {
										"type": "instrinct",
										"name": "string"
									}
								}
							],
							"sources": [
								{
									"fileName": "angular.ts",
									"line": 15,
									"character": 8
								}
							]
						}
					],
					"groups": [
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								4,
								3
							]
						},
						{
							"title": "Methods",
							"kind": 2048,
							"children": [
								5
							]
						}
					],
					"sources": [
						{
							"fileName": "angular.ts",
							"line": 4,
							"character": 13
						}
					]
				}
			],
			"groups": [
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						2
					]
				}
			],
			"sources": [
				{
					"fileName": "angular.ts",
					"line": 1,
					"character": 0
				}
			]
		},
		{
			"id": 7,
			"name": "\"component\"",
			"kind": 1,
			"kindString": "External module",
			"flags": {
				"isExported": true
			},
			"originalName": "C:/Users/yochoi/Documents/GitHub/doc-test/app/component.ts",
			"children": [
				{
					"id": 8,
					"name": "PaginationComponent",
					"kind": 128,
					"kindString": "Class",
					"flags": {
						"isExported": true
					},
					"comment": {
						"shortText": "higgs pagination ftw"
					},
					"decorators": [
						{
							"name": "Component",
							"type": {
								"type": "reference",
								"name": "Component"
							},
							"arguments": {
								"obj": "{\r\n  selector: 'higgs-pagination',\r\n  templateUrl: './pagination.component.html',\r\n  styleUrls: ['./pagination.component.css'],\r\n  changeDetection: ChangeDetectionStrategy.OnPush\r\n}"
							}
						}
					],
					"children": [
						{
							"id": 12,
							"name": "currentPage",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true
							},
							"decorators": [
								{
									"name": "Input",
									"type": {
										"type": "reference",
										"name": "Input"
									},
									"arguments": {}
								}
							],
							"sources": [
								{
									"fileName": "component.ts",
									"line": 19,
									"character": 22
								}
							],
							"type": {
								"type": "instrinct",
								"name": "number"
							}
						},
						{
							"id": 10,
							"name": "next",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true
							},
							"decorators": [
								{
									"name": "Output",
									"type": {
										"type": "reference",
										"name": "Output"
									},
									"arguments": {}
								}
							],
							"sources": [
								{
									"fileName": "component.ts",
									"line": 16,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"name": "EventEmitter",
								"typeArguments": [
									{
										"type": "instrinct",
										"name": "number"
									}
								]
							},
							"defaultValue": " new EventEmitter<number>()"
						},
						{
							"id": 11,
							"name": "numberOfPages",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true
							},
							"decorators": [
								{
									"name": "Input",
									"type": {
										"type": "reference",
										"name": "Input"
									},
									"arguments": {}
								}
							],
							"sources": [
								{
									"fileName": "component.ts",
									"line": 18,
									"character": 24
								}
							],
							"type": {
								"type": "instrinct",
								"isArray": true,
								"name": "number"
							}
						},
						{
							"id": 9,
							"name": "prev",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isExported": true
							},
							"comment": {
								"shortText": "Called when previous is clicked"
							},
							"decorators": [
								{
									"name": "Output",
									"type": {
										"type": "reference",
										"name": "Output"
									},
									"arguments": {}
								}
							],
							"sources": [
								{
									"fileName": "component.ts",
									"line": 15,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"name": "EventEmitter",
								"typeArguments": [
									{
										"type": "instrinct",
										"name": "number"
									}
								]
							},
							"defaultValue": " new EventEmitter<number>()"
						}
					],
					"groups": [
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								12,
								10,
								11,
								9
							]
						}
					],
					"sources": [
						{
							"fileName": "component.ts",
							"line": 12,
							"character": 32
						}
					]
				}
			],
			"groups": [
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						8
					]
				}
			],
			"sources": [
				{
					"fileName": "component.ts",
					"line": 1,
					"character": 0
				}
			]
		},
		{
			"id": 13,
			"name": "\"react\"",
			"kind": 1,
			"kindString": "External module",
			"flags": {
				"isExported": true
			},
			"originalName": "C:/Users/yochoi/Documents/GitHub/doc-test/app/react.ts",
			"children": [
				{
					"id": 14,
					"name": "React",
					"kind": 128,
					"kindString": "Class",
					"flags": {},
					"children": [
						{
							"id": 15,
							"name": "abc",
							"kind": 1024,
							"kindString": "Property",
							"flags": {
								"isPrivate": true
							},
							"sources": [
								{
									"fileName": "react.ts",
									"line": 3,
									"character": 15
								}
							],
							"type": {
								"type": "instrinct",
								"name": "string"
							}
						}
					],
					"groups": [
						{
							"title": "Properties",
							"kind": 1024,
							"children": [
								15
							]
						}
					],
					"sources": [
						{
							"fileName": "react.ts",
							"line": 1,
							"character": 11
						}
					]
				}
			],
			"groups": [
				{
					"title": "Classes",
					"kind": 128,
					"children": [
						14
					]
				}
			],
			"sources": [
				{
					"fileName": "react.ts",
					"line": 1,
					"character": 0
				}
			]
		}
	],
	"groups": [
		{
			"title": "External modules",
			"kind": 1,
			"children": [
				1,
				7,
				13
			]
		}
	]
};

fs.readFile('template.html', 'utf-8', function (error, source) {
    var template = handlebars.compile(source);
    var html = template(data);

    fs.writeFile("readme.md", html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});