// Fishing Mod/More foods/More blocks/More items
// Made by Crazy4Redstone

// Items

ModPE.setItem (346,'fishing_rod_uncast',0,'Fishing Rod')
ModPE.setItem (371,'gold_nugget',0,'Gold Nugget')
ModPE.setItem (422,'dye_powder',3,'Coco Beans')
ModPE.setItemCategory (371,40,0)

// Foods

ModPE.setFoodItem (349,'fish_raw',0,3,'Raw Fish')
ModPE.setFoodItem (350,'fish_cooked',0,6,'Cooked Fish')
ModPE.setFoodItem (322,'apple_golden',0,20,'Golden Apple')
ModPE.setFoodItem (357,'cookie',0,1,'Cookie')

// Blocks

Block.defineBlock (145,'Anvil',['anvil_top_damaged_x'],50,false,7)
Block.setShape (145,0.25,0,0.25,0.75,1,0.75)

// Crafting

ModPE.addCraftRecipe (346,1,0,[280,0,280,0,280,0,287,0,287,0])
ModPE.addCraftRecipe (322,1,0,[260,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0])
ModPE.addCraftRecipe (357,1,0,[296,0,296,0,422,0])
ModPE.addCraftRecipe (371,9,0,[266,0])
ModPE.addCraftRecipe (266,1,0,[371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,371,0,])
ModPE.addCraftRecipe (145,1,0,[42,0,42,0,42,0,265,0,265,0,265,0,265,0])

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
	if (itemId == 267 && blockId == 145)
	{
		addItemInventory (267,-1)
		addItemInventory (267,1)
	}
	else if (itemId == 272 && blockId == 145)
	{
		addItemInventory (272,-1)
		additemInventory (272,1)
	}
	else if (itemId == 273 && blockId == 145)
	{
		addItemInventory (273,-1)
		addItemInventory (273,1)
	}
		else if (itemId == 274 && blockId == 145)
	{
		addItemInventory (274,-1)
		addItemInventory (274,1)
	}
		else if (itemId == 275 && blockId == 145)
	{
		addItemInventory (275,-1)
		addItemInventory (275,1)
	}
		else if (itemId == 276 && blockId == 145)
	{
		addItemInventory (276,-1)
		addItemInventory (276,1)
	}
		else if (itemId == 277 && blockId == 145)
	{
		addItemInventory (277,-1)
		addItemInventory (277,1)
	}
		else if (itemId == 278 && blockId == 145)
	{
		addItemInventory (278,-1)
		addItemInventory (278,1)
	}
		else if (itemId == 279 && blockId == 145)
	{
		addItemInventory (279,-1)
		addItemInventory (279,1)
	}
		else if (itemId == 283 && blockId == 145)
	{
		addItemInventory (283,-1)
		addItemInventory (283,1)
	}
		else if (itemId == 284 && blockId == 145)
	{
		addItemInventory (284,-1)
		addItemInventory (284,1)
	}
		else if (itemId == 285 && blockId == 145)
	{
		addItemInventory (285,-1)
		addItemInventory (285,1)
	}
		else if (itemId == 286 && blockId == 145)
	{
		addItemInventory (286,-1)
		addItemInventory (286,1)
	}
		else if (itemId == 291 && blockId == 145)
	{
		addItemInventory (291,-1)
		addItemInventory (291,1)
	}
		else if (itemId == 292 && blockId == 145)
	{
		addItemInventory (292,-1)
		addItemInventory (292,1)
	}
		else if (itemId == 293 && blockId == 145)
	{
		addItemInventory (293,-1)
		addItemInventory (293,1)
	}
		else if (itemId == 294 && blockId == 145)
	{
		addItemInventory (294,-1)
		addItemInventory (294,1)
	}
	}

