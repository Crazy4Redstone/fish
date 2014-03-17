// Fishing Mod
// Made by Crazy4Redstone

// Items

ModPE.setItem (346,'fishing_rod_uncast',0,'Fishing Rod')
ModPE.setItem (349,'fish_raw',0,'Raw Fish')
ModPE.setItem (350,'fish_cooked',0,'Cooked Fish')

// Foods

ModPE.setFoodItem (349,'fish_raw',0,3,'Raw Fish')
ModPE.setFoodItem (350,'fish_cooked',0,6,'Cooked Fish')

// Crafting

ModPE.addCraftRecipe (346,1,0,[280,3,287,2])

// Furnace

ModPE.addFurnaceRecipe (349,1,350)

// Functions

function useItem (x,y,z,itemId,blockId,side)
{
	if (itemId == 346 && blockId !== 0 && getTile (x,y+1,z) == 8 && side == 1 || itemId == 346 && blockId !== 0 && getTile (x,y+1,z) == 9 && side == 1)
	{
	var random = Math.floor ((Math.random() * 35) +1)
	if (random <=23)
	{
		addItemInventory (0)
	}
	if (random == 24 || random == 25 || random == 26)
	{
		addItemInventory (349,1)
	}
	else if (random == 28 || random == 29)
	{
		addItemInventory (349,2)
	}
	else if (random >= 30)
	{
	preventDefault ()
	}
	}
	if (itemId == 349 && blockId == 62)
	{
		preventDefault ()
		addItemInventory (349,-1)
		addItemInventory (350,1)
	}
}
