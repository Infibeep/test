const mongoose = require("mongoose");

var KineticsSchema = new mongoose.Schema({
    ec_number : String,
    substrate : String,
    value : String,
    parameters :  String,
    uniprot :  String,
    organism  :  String,
    reaction :  String,
    pubmed :  String,
    commentary :  String,
    temperature :  String,
    pH :  String,
    variant_kinetics :  String,
    unit :  String,
    source :  String,
    ec_1 :  String,
    ec_2 :  String,
    ec_3 :  String,
    ec_4 :  String,
    mutation_class :  String,
    mutation_kcat_desc :  String
});

mongoose.model("hydrolases_kinetics",KineticsSchema);