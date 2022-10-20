{
	"contents": {
		"04fa20eb-e213-4395-9373-93d6669a2016": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "myui5workflow",
			"subject": "myui5workflow",
			"name": "myui5workflow",
			"documentation": "workflow for approving tasks",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"8eaa37bb-0a19-40f4-8b67-e5dd024492dc": {
					"name": "UserTask1"
				},
				"174f3270-78a4-48a2-b326-e6c00261aa1c": {
					"name": "Approved?"
				},
				"3bf71ae3-1af2-4946-9c9b-d2e78f195d6d": {
					"name": "MailTask1"
				},
				"18e35b24-1139-416b-9319-f4a2c17f3d73": {
					"name": "mailtask2"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"59f43c0e-630c-4e43-8d3d-00cd2bd08d7c": {
					"name": "SequenceFlow2"
				},
				"97e6ae31-ecdb-4765-99a3-b6e742b0a29b": {
					"name": "Yes"
				},
				"cfa02edd-61ee-4a19-baae-ecf9ded88b5b": {
					"name": "SequenceFlow4"
				},
				"ca5fb585-7853-41ed-b9b6-75892d20318e": {
					"name": "No"
				},
				"915ae90f-4005-474d-80ff-28bd2a6ada44": {
					"name": "SequenceFlow6"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "8eaa37bb-0a19-40f4-8b67-e5dd024492dc"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"dcb672f8-bce5-4380-ad7a-d176bd868d28": {},
				"314ec04b-789b-490a-8256-81176ae33f09": {},
				"f49f01d9-0c6a-4671-9b88-e7ac8a80a62d": {},
				"d8dc308f-5e5b-46a0-9637-71f23182562e": {},
				"5127f3f7-2714-49bb-abb2-afc7de200ac9": {},
				"bc5540e9-c6f5-4a64-a945-69eca46e8150": {},
				"e87de80c-34cd-46df-89c1-77361fc33dd4": {},
				"b5190381-77e4-4350-a8f7-d2199b6876af": {},
				"74fabbe1-633e-42eb-a3cb-921d90a89e1c": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 535,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,116 224,116",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "dcb672f8-bce5-4380-ad7a-d176bd868d28",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"maildefinition": 2,
			"sequenceflow": 6,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1,
			"mailtask": 2,
			"exclusivegateway": 1
		},
		"8eaa37bb-0a19-40f4-8b67-e5dd024492dc": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "Approve Required",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "jacky.liu02@sap.com",
			"formReference": "/forms/myui5workflow/approvalform.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "approvalform"
			}, {
				"key": "formRevision",
				"value": "1.0"
			}],
			"id": "usertask1",
			"name": "UserTask1"
		},
		"dcb672f8-bce5-4380-ad7a-d176bd868d28": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 174,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "8eaa37bb-0a19-40f4-8b67-e5dd024492dc"
		},
		"59f43c0e-630c-4e43-8d3d-00cd2bd08d7c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "8eaa37bb-0a19-40f4-8b67-e5dd024492dc",
			"targetRef": "174f3270-78a4-48a2-b326-e6c00261aa1c"
		},
		"314ec04b-789b-490a-8256-81176ae33f09": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "224,116.5 310,116.5",
			"sourceSymbol": "dcb672f8-bce5-4380-ad7a-d176bd868d28",
			"targetSymbol": "f49f01d9-0c6a-4671-9b88-e7ac8a80a62d",
			"object": "59f43c0e-630c-4e43-8d3d-00cd2bd08d7c"
		},
		"174f3270-78a4-48a2-b326-e6c00261aa1c": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway1",
			"name": "Approved?",
			"default": "ca5fb585-7853-41ed-b9b6-75892d20318e"
		},
		"f49f01d9-0c6a-4671-9b88-e7ac8a80a62d": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 289,
			"y": 96,
			"object": "174f3270-78a4-48a2-b326-e6c00261aa1c"
		},
		"97e6ae31-ecdb-4765-99a3-b6e742b0a29b": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${usertasks.usertask1.last.decision==\"approve\"}",
			"id": "sequenceflow3",
			"name": "Yes",
			"sourceRef": "174f3270-78a4-48a2-b326-e6c00261aa1c",
			"targetRef": "3bf71ae3-1af2-4946-9c9b-d2e78f195d6d"
		},
		"d8dc308f-5e5b-46a0-9637-71f23182562e": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "310,116.5 433,116.5",
			"sourceSymbol": "f49f01d9-0c6a-4671-9b88-e7ac8a80a62d",
			"targetSymbol": "5127f3f7-2714-49bb-abb2-afc7de200ac9",
			"object": "97e6ae31-ecdb-4765-99a3-b6e742b0a29b"
		},
		"3bf71ae3-1af2-4946-9c9b-d2e78f195d6d": {
			"classDefinition": "com.sap.bpm.wfs.MailTask",
			"destinationSource": "consumer",
			"id": "mailtask1",
			"name": "MailTask1",
			"mailDefinitionRef": "a4816462-3bf1-4cc7-84b7-dd7a23eee577"
		},
		"5127f3f7-2714-49bb-abb2-afc7de200ac9": {
			"classDefinition": "com.sap.bpm.wfs.ui.MailTaskSymbol",
			"x": 383,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "3bf71ae3-1af2-4946-9c9b-d2e78f195d6d"
		},
		"cfa02edd-61ee-4a19-baae-ecf9ded88b5b": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow4",
			"name": "SequenceFlow4",
			"sourceRef": "3bf71ae3-1af2-4946-9c9b-d2e78f195d6d",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"bc5540e9-c6f5-4a64-a945-69eca46e8150": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "433,116.75 552.5,116.75",
			"sourceSymbol": "5127f3f7-2714-49bb-abb2-afc7de200ac9",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "cfa02edd-61ee-4a19-baae-ecf9ded88b5b"
		},
		"a4816462-3bf1-4cc7-84b7-dd7a23eee577": {
			"classDefinition": "com.sap.bpm.wfs.MailDefinition",
			"name": "maildefinition1",
			"to": "jacky.liu02@sap.com",
			"subject": "your request has been approved",
			"text": "Hello ${context.employee},\nYour request has been approved, regarding the IT equipment: ${context.itequipment} with a quantity of ${context.quantity}. Best regards.",
			"id": "maildefinition1"
		},
		"18e35b24-1139-416b-9319-f4a2c17f3d73": {
			"classDefinition": "com.sap.bpm.wfs.MailTask",
			"destinationSource": "consumer",
			"id": "mailtask2",
			"name": "mailtask2",
			"mailDefinitionRef": "b8dec327-22ab-481c-98db-dc2277bbc615"
		},
		"e87de80c-34cd-46df-89c1-77361fc33dd4": {
			"classDefinition": "com.sap.bpm.wfs.ui.MailTaskSymbol",
			"x": 383,
			"y": 221,
			"width": 100,
			"height": 60,
			"object": "18e35b24-1139-416b-9319-f4a2c17f3d73"
		},
		"b8dec327-22ab-481c-98db-dc2277bbc615": {
			"classDefinition": "com.sap.bpm.wfs.MailDefinition",
			"name": "maildefinition2",
			"to": "jacky.liu02@sap.com",
			"subject": "your request has been rejected",
			"text": "Hello ${context.employee},\nYour request has been rejected, regarding the IT equipment: ${context.itequipment} with a quantity of ${context.quantity}. For this reason: ${context.comments}. Best regards.",
			"id": "maildefinition2"
		},
		"ca5fb585-7853-41ed-b9b6-75892d20318e": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow5",
			"name": "No",
			"sourceRef": "174f3270-78a4-48a2-b326-e6c00261aa1c",
			"targetRef": "18e35b24-1139-416b-9319-f4a2c17f3d73"
		},
		"b5190381-77e4-4350-a8f7-d2199b6876af": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "310,117 310,251 383.5,251",
			"sourceSymbol": "f49f01d9-0c6a-4671-9b88-e7ac8a80a62d",
			"targetSymbol": "e87de80c-34cd-46df-89c1-77361fc33dd4",
			"object": "ca5fb585-7853-41ed-b9b6-75892d20318e"
		},
		"915ae90f-4005-474d-80ff-28bd2a6ada44": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow6",
			"name": "SequenceFlow6",
			"sourceRef": "18e35b24-1139-416b-9319-f4a2c17f3d73",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"74fabbe1-633e-42eb-a3cb-921d90a89e1c": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "433,251 433,177.75 552.5,177.75 552.5,117.5",
			"sourceSymbol": "e87de80c-34cd-46df-89c1-77361fc33dd4",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "915ae90f-4005-474d-80ff-28bd2a6ada44"
		}
	}
}