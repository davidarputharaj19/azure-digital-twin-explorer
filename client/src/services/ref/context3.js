module.exports = {
  "@vocab": "http://azure.com/DigitalTwins/MetaModel/undefinedTerm/",
  "dtmm": "http://azure.com/DigitalTwins/MetaModel/",
  "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
  "xsd": "http://www.w3.org/2001/XMLSchema#",
  "sh": "http://www.w3.org/ns/shacl#",
  "rdfs:Class": { "@type": "@vocab" },
  "rdfs:subClassOf": { "@type": "@vocab" },
  "rdfs:domain": { "@type": "@vocab" },
  "sh:targetClass": { "@type": "@vocab" },
  "sh:datatype": { "@type": "@vocab" },
  "sh:lessThan": { "@type": "@vocab" },
  "sh:lessThanOrEquals": { "@type": "@vocab" },
  "sh:class": { "@type": "@vocab" },
  "sh:nodeKind": { "@type": "@vocab" },
  "sh:path": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "sh:in": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "sh:and": { "@container": "@list" },
  "sh:or": { "@container": "@list" },
  "sh:not": { "@type": "@vocab" },
  "sh:alternativePath": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "sh:inversePath": { "@type": "@vocab" },
  "sh:zeroOrMorePath": { "@type": "@vocab" },
  "sh:oneOrMorePath": { "@type": "@vocab" },
  "sh:zeroOrOnePath": { "@type": "@vocab" },
  "sh:ignoredProperties": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "dtmm:aka": { "@type": "@vocab" },
  "dtmm:asCotype": { "@type": "@vocab" },
  "dtmm:asProperty": { "@type": "@vocab" },
  "dtmm:childOf": { "@type": "@vocab" },
  "dtmm:childProperties": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "dtmm:classOfProperty": { "@type": "@vocab" },
  "dtmm:datatypeProperty": { "@type": "@vocab" },
  "dtmm:description": {
    "@container": "@language",
    "@language": "en-US"
  },
  "dtmm:dictionaryKey": { "@type": "@vocab" },
  "dtmm:dtmiSegment": { "@type": "@vocab" },
  "dtmm:excludeType": { "@type": "@vocab" },
  "dtmm:hasValue": { "@type": "@vocab" },
  "dtmm:importProperties": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "dtmm:instanceProperty": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "dtmm:jsonType": { "@type": "@vocab" },
  "dtmm:keyProperty": { "@type": "@vocab" },
  "dtmm:keyrefProperty": { "@type": "@vocab" },
  "dtmm:path": { "@type": "@vocab" },
  "dtmm:refersToProperty": { "@type": "@vocab" },
  "dtmm:parentOfProperty": { "@type": "@vocab" },
  "dtmm:patternDesc": {
    "@container": "@language",
    "@language": "en-US"
  },
  "dtmm:properties": {
    "@type": "@vocab",
    "@container": "@list"
  },
  "dtmm:relation": { "@type": "@vocab" },
  "dtmm:reservedPrefix": { "@container": "@list" },
  "dtmm:uniqueProperties": {
    "@type": "@vocab",
    "@container": "@list"
  },

  "DtdlExtension": { "@id": "dtmi:dtdl:meta:DtdlExtension;3" },
  "metamodel": { "@id": "dtmi:dtdl:meta:metamodel;3" },
  "model": { "@id": "dtmi:dtdl:meta:model;3" },

  "AdjunctType": { "@id": "dtmi:dtdl:class:AdjunctType;3" },
  "Alias": { "@id": "dtmi:dtdl:class:Alias;3" },
  "Array": { "@id": "dtmi:dtdl:class:Array;3" },
  "Boolean": { "@id": "dtmi:dtdl:class:Boolean;3" },
  "ComplexSchema": { "@id": "dtmi:dtdl:class:ComplexSchema;3" },
  "Command": { "@id": "dtmi:dtdl:class:Command;3" },
  "CommandPayload": { "@id": "dtmi:dtdl:class:CommandPayload;3" },
  "CommandRequest": { "@id": "dtmi:dtdl:class:CommandRequest;3" },
  "CommandResponse": { "@id": "dtmi:dtdl:class:CommandResponse;3" },
  "CommandType": { "@id": "dtmi:dtdl:class:CommandType;3" },
  "Component": { "@id": "dtmi:dtdl:class:Component;3" },
  "Content": { "@id": "dtmi:dtdl:class:Content;3" },
  "Date": { "@id": "dtmi:dtdl:class:Date;3" },
  "DateTime": { "@id": "dtmi:dtdl:class:DateTime;3" },
  "Double": { "@id": "dtmi:dtdl:class:Double;3" },
  "Duration": { "@id": "dtmi:dtdl:class:Duration;3" },
  "Entity": { "@id": "dtmi:dtdl:class:Entity;3" },
  "Enum": { "@id": "dtmi:dtdl:class:Enum;3" },
  "EnumValue": { "@id": "dtmi:dtdl:class:EnumValue;3" },
  "Field": { "@id": "dtmi:dtdl:class:Field;3" },
  "Float": { "@id": "dtmi:dtdl:class:Float;3" },
  "Integer": { "@id": "dtmi:dtdl:class:Integer;3" },
  "Interface": { "@id": "dtmi:dtdl:class:Interface;3" },
  "LatentType": { "@id": "dtmi:dtdl:class:LatentType;3" },
  "Long": { "@id": "dtmi:dtdl:class:Long;3" },
  "Map": { "@id": "dtmi:dtdl:class:Map;3" },
  "MapKey": { "@id": "dtmi:dtdl:class:MapKey;3" },
  "MapValue": { "@id": "dtmi:dtdl:class:MapValue;3" },
  "NamedEntity": { "@id": "dtmi:dtdl:class:NamedEntity;3" },
  "NamedLatentType": { "@id": "dtmi:dtdl:class:NamedLatentType;3" },
  "NumericSchema": { "@id": "dtmi:dtdl:class:NumericSchema;3" },
  "Object": { "@id": "dtmi:dtdl:class:Object;3" },
  "PrimitiveSchema": { "@id": "dtmi:dtdl:class:PrimitiveSchema;3" },
  "Property": { "@id": "dtmi:dtdl:class:Property;3" },
  "Relationship": { "@id": "dtmi:dtdl:class:Relationship;3" },
  "Schema": { "@id": "dtmi:dtdl:class:Schema;3" },
  "SchemaField": { "@id": "dtmi:dtdl:class:SchemaField;3" },
  "SemanticType": { "@id": "dtmi:dtdl:class:SemanticType;3" },
  "SemanticUnit": { "@id": "dtmi:dtdl:class:SemanticUnit;3" },
  "String": { "@id": "dtmi:dtdl:class:String;3" },
  "Telemetry": { "@id": "dtmi:dtdl:class:Telemetry;3" },
  "TemporalSchema": { "@id": "dtmi:dtdl:class:TemporalSchema;3" },
  "Time": { "@id": "dtmi:dtdl:class:Time;3" },
  "Unit": { "@id": "dtmi:dtdl:class:Unit;3" },
  "UnitAttribute": { "@id": "dtmi:dtdl:class:UnitAttribute;3" },

  "aliasFor": {
    "@id": "dtmi:dtdl:property:aliasFor;3",
    "@type": "@vocab"
  },
  "commandType": {
    "@id": "dtmi:dtdl:property:commandType;3",
    "@type": "@vocab"
  },
  "comment": { "@id": "dtmi:dtdl:property:comment;3" },
  "contents": {
    "@id": "dtmi:dtdl:property:contents;3",
    "@type": "@vocab"
  },
  "description": {
    "@id": "dtmi:dtdl:property:description;3",
    "@container": "@language",
    "@language": "en"
  },
  "displayName": {
    "@id": "dtmi:dtdl:property:displayName;3",
    "@container": "@language",
    "@language": "en"
  },
  "elementSchema": {
    "@id": "dtmi:dtdl:property:elementSchema;3",
    "@type": "@vocab"
  },
  "enumValue": { "@id": "dtmi:dtdl:property:enumValue;3" },
  "enumValues": {
    "@id": "dtmi:dtdl:property:enumValues;3",
    "@type": "@vocab"
  },
  "exponent": { "@id": "dtmi:dtdl:property:exponent;3" },
  "extends": {
    "@id": "dtmi:dtdl:property:extends;3",
    "@type": "@vocab"
  },
  "fields": {
    "@id": "dtmi:dtdl:property:fields;3",
    "@type": "@vocab"
  },
  "languageVersion": { "@id": "dtmi:dtdl:property:languageVersion;3" },
  "mapKey": {
    "@id": "dtmi:dtdl:property:mapKey;3",
    "@type": "@vocab"
  },
  "mapValue": {
    "@id": "dtmi:dtdl:property:mapValue;3",
    "@type": "@vocab"
  },
  "maxMultiplicity": { "@id": "dtmi:dtdl:property:maxMultiplicity;3" },
  "minMultiplicity": { "@id": "dtmi:dtdl:property:minMultiplicity;3" },
  "name": { "@id": "dtmi:dtdl:property:name;3" },
  "properties": {
    "@id": "dtmi:dtdl:property:properties;3",
    "@type": "@vocab"
  },
  "request": {
    "@id": "dtmi:dtdl:property:request;3",
    "@type": "@vocab"
  },
  "response": {
    "@id": "dtmi:dtdl:property:response;3",
    "@type": "@vocab"
  },
  "schema": {
    "@id": "dtmi:dtdl:property:schema;3",
    "@type": "@vocab"
  },
  "schemas": {
    "@id": "dtmi:dtdl:property:schemas;3",
    "@type": "@vocab"
  },
  "symbol": { "@id": "dtmi:dtdl:property:symbol;3" },
  "target": {
    "@id": "dtmi:dtdl:property:target;3",
    "@type": "@vocab"
  },
  "valueSchema": {
    "@id": "dtmi:dtdl:property:valueSchema;3",
    "@type": "@vocab"
  },
  "writable": { "@id": "dtmi:dtdl:property:writable;3" },

  "asynchronous": { "@id": "dtmi:dtdl:instance:CommandType:asynchronous;3" },
  "synchronous": { "@id": "dtmi:dtdl:instance:CommandType:synchronous;3" },
  "boolean": { "@id": "dtmi:dtdl:instance:Schema:boolean;3" },
  "date": { "@id": "dtmi:dtdl:instance:Schema:date;3" },
  "dateTime": { "@id": "dtmi:dtdl:instance:Schema:dateTime;3" },
  "double": { "@id": "dtmi:dtdl:instance:Schema:double;3" },
  "duration": { "@id": "dtmi:dtdl:instance:Schema:duration;3" },
  "float": { "@id": "dtmi:dtdl:instance:Schema:float;3" },
  "integer": { "@id": "dtmi:dtdl:instance:Schema:integer;3" },
  "long": { "@id": "dtmi:dtdl:instance:Schema:long;3" },
  "string": { "@id": "dtmi:dtdl:instance:Schema:string;3" },
  "time": { "@id": "dtmi:dtdl:instance:Schema:time;3" },

  "point": { "@id": "dtmi:standard:schema:geospatial:point;3" },
  "multiPoint": { "@id": "dtmi:standard:schema:geospatial:multiPoint;3" },
  "lineString": { "@id": "dtmi:standard:schema:geospatial:lineString;3" },
  "multiLineString": { "@id": "dtmi:standard:schema:geospatial:multiLineString;3" },
  "polygon": { "@id": "dtmi:standard:schema:geospatial:polygon;3" },
  "multiPolygon": { "@id": "dtmi:standard:schema:geospatial:multiPolygon;3" }
};
