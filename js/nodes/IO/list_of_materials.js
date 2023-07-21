
class MaterialsList extends InputList{
    constructor() {
        super();
        this.input_type = "material";
        this.output_type = "materials_list";
    }
};

MaterialsList.title = "List of Materials";
MaterialsList.desc = "Merges several materials into an array";

LiteGraph.registerNodeType("LISTS/materials_list", MaterialsList);

console.log("Materials list node created"); //helps to debug
