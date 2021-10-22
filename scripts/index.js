module.exports = async function main (callback){
    try {
        // Here is where our interaction code goes 
        const Collectible = artifacts.require("Collectible")
        const collectible = await Collectible.deployed();

        // Lets trying setting a name 
        await collectible.setName("Rodney");
        console.log("The name we are expecting is ", (await collectible.getName()).toString());


        callback(0);
        console.log("we , (Rodney i am ) are automating the interaction of smart contracts ")
    }catch (error){
        console.error(error);
        callback(1);
    }
}