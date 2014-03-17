// Fishing Mod
// Made by Crazy4Redstone

// Items

ModPE.setItem (346,'fishing_rod_uncast',0,'Fishing Rod')
ModPE.setItem (371,'gold_nugget',0,'Gold Nugget')
ModPE.setItem (422,'dye_powder',3,'Coco Beans')
ModPE.setItemCategory (371,10,0)

// Foods

ModPE.setFoodItem (349,'fish_raw',0,3,'Raw Fish')
ModPE.setFoodItem (350,'fish_cooked',0,6,'Cooked Fish')
ModPE.setFoodItem (322,'apple_golden',0,20,'Golden Apple')
ModPE.setFoodItem (357,'cookie',0,1,'Cookie')

// Crafting

ModPE.addCraftRecipe (346,1,0,[280,0,280,0,280,0,287,0,287,0])
ModPE.addCraftRecipe (322,1,0,[260,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0])
ModPE.addCraftRecipe (357,1,0,[296,0,296,0,422,0])
ModPE.addCraftRecipe (371,9,0,[266,0])
ModPE.addCraftRecipe (266,1,0,[371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,])

// Furnace

ModPE.addFurnaceRecipe (349,350)

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
}
