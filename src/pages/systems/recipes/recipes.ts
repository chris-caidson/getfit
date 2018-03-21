import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  recipes: any = [{ "id": 1, "title": "Strawberry Cheesecake Shake", "imgSrc": "strawberry-cheesecake-shake", "category": "Shake" },
  { "id": 2, "title": "Mint Chocolate IsaLean Shake", "imgSrc": "mint-chocolate-isalean-shake", "category": "Shake" },
  { "id": 3, "title": "Skinny Beef and Broccoli Stir Fry", "imgSrc": "skinny-beef-and-broccoli-stir-fry", "category": "Entrée" },
  { "id": 4, "title": "Chocolate Protein Ice Cream", "imgSrc": "chocolate-protein-ice-cream", "category": "Dessert" },
  { "id": 5, "title": "Cool Cleanse Sorbet", "imgSrc": "cool-cleanse-sorbet", "category": "Dessert" },
  { "id": 6, "title": "Leftover Turkey Spinach Frittata", "imgSrc": "leftover-turkey-spinach-frittata", "category": "Breakfast" },
  { "id": 7, "title": "Berry Coconut Shake", "imgSrc": "berry-coconut-shake", "category": "Shake" },
  { "id": 8, "title": "Banana Nut Shake", "imgSrc": "banana-nut-shake", "category": "Shake" },
  { "id": 9, "title": "Lisa's Jamocha Almond Shake", "imgSrc": "lisas-jamocha-almond-shake", "category": "Shake" },
  { "id": 10, "title": "Frozen e+ Limeade", "imgSrc": "frozen-e-plus-limeade", "category": "Beverage" },
  { "id": 11, "title": "Peanut Butter Oatmeal Cookie Shake", "imgSrc": "peanut-butter-oatmeal-cookie-shake", "category": "Shake" },
  { "id": 12, "title": "Banana Peanut Butter Delights", "imgSrc": "banana-peanut-butter-delights", "category": "Snack" },
  { "id": 13, "title": "Cafe Mocha Shake", "imgSrc": "cafe-mocha-shake", "category": "Shake" },
  { "id": 14, "title": "Cookies and Cream Protein Waffles", "imgSrc": "cookies-and-cream-protein-waffles", "category": "Breakfast" },
  { "id": 15, "title": "Morning Magic", "imgSrc": "morning-magic", "category": "Beverage" },
  { "id": 16, "title": "Post-Workout Greens Shake", "imgSrc": "post-workout-greens-shake", "category": "Shake" },
  { "id": 17, "title": "Amy's Hot Chocolate", "imgSrc": "amys-hot-chocolate", "category": "Beverage" },
  { "id": 18, "title": "Frozen Protein Creamsicles", "imgSrc": "frozen-protein-creamsicles", "category": "Snack" },
  { "id": 19, "title": "Protein Brownies", "imgSrc": "protein-brownies", "category": "Snack" },
  { "id": 20, "title": "Ranch-Roasted Chickpeas", "imgSrc": "ranch-roasted-chickpeas", "category": "Appetizer" },
  { "id": 21, "title": "Chocolate Mint Ice Cream", "imgSrc": "chocolate-mint-ice-cream", "category": "Dessert" },
  { "id": 22, "title": "Matcha Shake", "imgSrc": "matcha-shake", "category": "Shake" },
  { "id": 23, "title": "Avocado Fudge", "imgSrc": "avocado-fudge", "category": "Snack" },
  { "id": 24, "title": "Guiltless Ice Cream", "imgSrc": "guiltless-ice-cream", "category": "Dessert" },
  { "id": 25, "title": "Jingle Juice", "imgSrc": "jingle-juice", "category": "Beverage" },
  { "id": 26, "title": "Bedtime Belly Buster", "imgSrc": "bedtime-belly-buster", "category": "Beverage" },
  { "id": 27, "title": "Coffee Banana Protein Shake", "imgSrc": "coffee-banana-protein-shake", "category": "Shake" },
  { "id": 28, "title": "Strawberry Coconut Bars", "imgSrc": "strawberry-coconut-bars", "category": "Snack" },
  { "id": 29, "title": "Protein Cereal", "imgSrc": "protein-cereal", "category": "Breakfast" },
  { "id": 30, "title": "Apple Raisin Oatmeal Balls", "imgSrc": "apple-raisin-oatmeal-balls", "category": "Snack" },
  { "id": 31, "title": "Gingerbread Shake", "imgSrc": "gingerbread-shake", "category": "Shake" },
  { "id": 32, "title": "Strawberry IsaLean Crepes", "imgSrc": "strawberry-isalean-crepes", "category": "Dessert" },
  { "id": 33, "title": "IsaDelight Chip Cookies", "imgSrc": "isadelight-chip-cookies", "category": "Snack" },
  { "id": 34, "title": "Baked Cod", "imgSrc": "baked-cod", "category": "Entrée" },
  { "id": 35, "title": "Birthday Cake Breakfast Shake", "imgSrc": "birthday-cake-breakfast-shake", "category": "Shake" },
  { "id": 36, "title": "Mint Julep Hydrate", "imgSrc": "mint-julep-hydrate", "category": "Beverage" },
  { "id": 37, "title": "IsaLean Protein Peanut Butter Muffins", "imgSrc": "isalean-protein-peanut-butter-muffins", "category": "Snack" },
  { "id": 38, "title": "Protein Waffle", "imgSrc": "protein-waffle", "category": "Breakfast" },
  { "id": 39, "title": "Coconut Caramel Cookie Shake", "imgSrc": "coconut-caramel-cookie-shake", "category": "Shake" },
  { "id": 40, "title": "Gluten-Free Pumpkin Protein Muffins", "imgSrc": "gluten-free-pumpkin-protein-muffins", "category": "Snack" },
  { "id": 41, "title": "Protein Cinnamon French Toast", "imgSrc": "protein-cinnamon-french-toast", "category": "Breakfast" },
  { "id": 42, "title": "Banana Protein Waffles", "imgSrc": "banana-protein-waffles", "category": "Breakfast" },
  { "id": 43, "title": "Blueberry Cobbler Shake", "imgSrc": "blueberry-cobbler-shake", "category": "Shake" },
  { "id": 44, "title": "Strawberry Cream Mini Muffins", "imgSrc": "strawberry-cream-mini-muffins", "category": "Snack" },
  { "id": 45, "title": "Strawberry Martini", "imgSrc": "strawberry-martini", "category": "Beverage" },
  { "id": 46, "title": "Chocolate Mint Java Shake", "imgSrc": "chocolate-mint-java-shake", "category": "Shake" },
  { "id": 47, "title": "Berry Vanilla Crunch Shake", "imgSrc": "berry-vanilla-crunch-shake", "category": "Shake" },
  { "id": 48, "title": "Tropical Papaya Freeze", "imgSrc": "tropical-papaya-freeze", "category": "Dessert" },
  { "id": 49, "title": "Chipotle Chicken Sweet Potato Skins", "imgSrc": "chipotle-chicken-sweet-potato-skins", "category": "Appetizer" },
  { "id": 50, "title": "Bomber Shake", "imgSrc": "bomber-shake", "category": "Shake" },
  { "id": 51, "title": "Blueberry Bliss Shake", "imgSrc": "blueberry-bliss-shake", "category": "Shake" },
  { "id": 52, "title": "Protein Chia Pudding", "imgSrc": "protein-chia-pudding", "category": "Dessert" },
  { "id": 53, "title": "Dutch Chocolate Coconut Balls", "imgSrc": "dutch-chocolate-coconut-balls", "category": "Snack" },
  { "id": 54, "title": "Tracy's Decadent Orange Chocolate Shake", "imgSrc": "tracys-decadent-orange-chocolate-shake", "category": "Shake" },
  { "id": 55, "title": "Whey Thins Zucchini Sticks", "imgSrc": "whey-thins-zucchini-sticks", "category": "Appetizer" },
  { "id": 56, "title": "Pumpkin Spice IsaLean Roll", "imgSrc": "pumpkin-spice-isalean-roll", "category": "Dessert" },
  { "id": 57, "title": "Chocolate Peanut Butter Brownie Shake", "imgSrc": "chocolate-peanut-butter-brownie-shake", "category": "Shake" },
  { "id": 58, "title": "Banana Berry Bomb Muffins", "imgSrc": "banana-berry-bomb-muffins", "category": "Snack" },
  { "id": 59, "title": "Sarah's Grandma's Apple Pie Shake", "imgSrc": "sarahs-grandmas-apple-pie-shake", "category": "Shake" },
  { "id": 60, "title": "Chocolate Mint Cookie Shake", "imgSrc": "chocolate-mint-cookie-shake", "category": "Shake" },
  { "id": 61, "title": "Protein Pumpkin Pie", "imgSrc": "protein-pumpkin-pie", "category": "Dessert" },
  { "id": 62, "title": "Fruit Ice Pops", "imgSrc": "fruit-ice-pops", "category": "Snack" },
  { "id": 63, "title": "Pumpkin Dutch Baby Pancake", "imgSrc": "pumpkin-dutch-baby-pancake", "category": "Breakfast" },
  { "id": 64, "title": "Banana Protein Cake", "imgSrc": "banana-protein-cake", "category": "Snack" },
  { "id": 65, "title": "Blueberry Oatmeal Shake", "imgSrc": "blueberry-oatmeal-shake", "category": "Shake" },
  { "id": 66, "title": "Chicken Tortilla Soup", "imgSrc": "chicken-tortilla-soup", "category": "Entrée" },
  { "id": 67, "title": "Cookies and Cream Protein Bites", "imgSrc": "cookies-and-cream-protein-bites", "category": "Snack" },
  { "id": 68, "title": "Tropical Isa-Island Shake", "imgSrc": "tropical-isa-island-shake", "category": "Shake" },
  { "id": 69, "title": "Dark Chocolate Peppermint IsaDelight Cups", "imgSrc": "dark-chocolate-peppermint-isadelight-cups", "category": "Snack" },
  { "id": 70, "title": "Banana Cream Pie", "imgSrc": "banana-cream-pie", "category": "Shake" },
  { "id": 71, "title": "IsaLean Classic Neapolitan Shake", "imgSrc": "isalean-classic-neapolitan-shake", "category": "Shake" },
  { "id": 72, "title": "Swamp Water", "imgSrc": "swamp-water", "category": "Beverage" },
  { "id": 73, "title": "Raw Pumpkin Tartlettes", "imgSrc": "raw-pumpkin-tartlettes", "category": "Dessert" },
  { "id": 74, "title": "Carrot Cake Shake", "imgSrc": "carrot-cake-shake", "category": "Shake" },
  { "id": 75, "title": "Lemon Berry Shake", "imgSrc": "lemon-berry-shake", "category": "Shake" },
  { "id": 76, "title": "Strawberry Sunrise Shake", "imgSrc": "strawberry-sunrise-shake", "category": "Shake" },
  { "id": 77, "title": "French Toast Shake", "imgSrc": "french-toast-shake", "category": "Shake" },
  { "id": 78, "title": "Berry IsaNice Cream", "imgSrc": "berry-isanice-cream", "category": "Shake" },
  { "id": 79, "title": "Chicken and Vegetable Lettuce Wraps", "imgSrc": "chicken-and-vegetable-lettuce-wraps", "category": "Appetizer" },
  { "id": 80, "title": "Cinnamon Isagenix Coffee", "imgSrc": "cinnamon-isagenix-coffee", "category": "Beverage" },
  { "id": 81, "title": "Peach Mango Dreamsicle", "imgSrc": "peach-mango-dreamsicles", "category": "Snack" },
  { "id": 82, "title": "Chocolate Cherry Shake", "imgSrc": "chocolate-cherry-shake", "category": "Shake" },
  { "id": 83, "title": "Peach Cobbler Shake", "imgSrc": "peach-cobbler-shake", "category": "Shake" },
  { "id": 84, "title": "Caramel Macchiato Shake", "imgSrc": "caramel-macchiato-shake", "category": "Shake" },
  { "id": 85, "title": "Fiesta Turkey Soup", "imgSrc": "fiesta-turkey-soup", "category": "Entrée" },
  { "id": 86, "title": "Protein Breakfast Muffins", "imgSrc": "protein-breakfast-muffins", "category": "Snack" },
  { "id": 87, "title": "Raspberries-'N-Cream Protein Parfait", "imgSrc": "raspberries-n-cream-protein-parfait", "category": "Dessert" },
  { "id": 88, "title": "Vanilla Chai Dairy-Free Protein Pancakes", "imgSrc": "vanilla-chai-dairy-free-protein-pancakes", "category": "Breakfast" },
  { "id": 89, "title": "Jalapeno Greens Hummus", "imgSrc": "jalapeno-greens-hummus", "category": "Appetizer" },
  { "id": 90, "title": "Pumpkin Pie Oat Cookies", "imgSrc": "pumpkin-pie-oat-cookies", "category": "Snack" },
  { "id": 91, "title": "Apple Chai Protein Shake", "imgSrc": "apple-chai-protein-shake", "category": "Shake" },
  { "id": 92, "title": "The Green Monster", "imgSrc": "the-green-monster", "category": "Shake" },
  { "id": 93, "title": "Pumpkin Spice Fruit Dip", "imgSrc": "pumpkin-spice-fruit-dip", "category": "Snack" },
  { "id": 94, "title": "Peanut Butter Protein Cookies", "imgSrc": "peanut-butter-protein-cookies", "category": "Snack" },
  { "id": 95, "title": "Mocha Mix Shake", "imgSrc": "mocha-mix-shake", "category": "Shake" },
  { "id": 96, "title": "Crazy for Coconuts Shake", "imgSrc": "crazy-for-coconuts-shake", "category": "Shake" },
  { "id": 97, "title": "Peach and Prosciutto Flatbread", "imgSrc": "peach-and-prosciutto-flatbread", "category": "Appetizer" },
  { "id": 98, "title": "Eggnog Peanut Butter Protein Balls", "imgSrc": "eggnog-peanut-butter-protein-balls", "category": "Snack" },
  { "id": 99, "title": "Roasted Pumpkin Spice Seeds", "imgSrc": "roasted-pumpkin-spice-seeds", "category": "Snack" },
  { "id": 100, "title": "Strawberry Vanilla Twist Shake", "imgSrc": "strawberry-vanilla-twist-shake", "category": "Shake" },
  { "id": 101, "title": "Whey Thins-Crusted Chicken", "imgSrc": "whey-thins-crusted-chicken", "category": "Entrée" },
  { "id": 102, "title": "Candy Cane Protein Shake", "imgSrc": "candy-cane-protein-shake", "category": "Shake" },
  { "id": 103, "title": "Turkey Meatballs", "imgSrc": "turkey-meatballs", "category": "Appetizer" },
  { "id": 104, "title": "Strawberry Ice Cream", "imgSrc": "strawberry-ice-cream", "category": "Dessert" },
  { "id": 105, "title": "Chicken Gyros with Tzatziki", "imgSrc": "chicken-gyros-with-tzatziki", "category": "Entrée" },
  { "id": 106, "title": "Cauliflower and Chicken Lettuce Wraps", "imgSrc": "cauliflower-and-chicken-lettuce-wraps", "category": "Appetizer" },
  { "id": 107, "title": "Mini Chocolate Mug Cake", "imgSrc": "mini-chocolate-mug-cake", "category": "Dessert" },
  { "id": 108, "title": "Protein Cookie Dough Bites", "imgSrc": "protein-cookie-dough-bites", "category": "Snack" },
  { "id": 109, "title": "Natural Berry Lemon Poppyseed Energy Bites", "imgSrc": "natural-berry-lemon-poppyseed-energy-bites", "category": "Snack" },
  { "id": 110, "title": "Shamrock Shake", "imgSrc": "shamrock-shake", "category": "Shake" },
  { "id": 111, "title": "Eggnog Mudslide Shake", "imgSrc": "eggnog-mudslide-shake", "category": "Shake" },
  { "id": 112, "title": "Sweet and Spicy Dressing", "imgSrc": "sweet-and-spicy-dressing", "category": "Appetizer" },
  { "id": 113, "title": "Chocolate Chip Green Protein Bars", "imgSrc": "chocolate-chip-green-protein-bars", "category": "Snack" },
  { "id": 114, "title": "The Berry Patriotic Shake", "imgSrc": "the-berry-patriotic-shake", "category": "Shake" },
  { "id": 115, "title": "Arnold Palmer Hydrate", "imgSrc": "arnold-palmer-hydrate", "category": "Beverage" },
  { "id": 116, "title": "Protein Mug Brownie", "imgSrc": "protein-mug-brownie", "category": "Dessert" },
  { "id": 117, "title": "Isa Sunrise", "imgSrc": "isa-sunrise", "category": "Beverage" },
  { "id": 118, "title": "Cinnamon Bun Popcorn", "imgSrc": "cinnamon-bun-popcorn", "category": "Snack" },
  { "id": 119, "title": "Tropical Protein Mousse", "imgSrc": "tropical-protein-mousse", "category": "Snack" },
  { "id": 120, "title": "Taco Casserole", "imgSrc": "taco-casserole", "category": "Entrée" },
  { "id": 121, "title": "Creamy Almond Dutch Chocolate Milkshake", "imgSrc": "creamy-almond-dutch-chocolate-milkshake", "category": "Shake" },
  { "id": 122, "title": "Cold Poached Salmon with Ginger", "imgSrc": "cold-poached-salmon-with-ginger", "category": "Entrée" },
  { "id": 123, "title": "Chocolate Mint Overnight Oats", "imgSrc": "chocolate-mint-overnight-oats", "category": "Breakfast" },
  { "id": 124, "title": "Great Grape Shake", "imgSrc": "great-grape-shake", "category": "Shake" },
  { "id": 125, "title": "Mexican Hot Chocolate Shake", "imgSrc": "mexican-hot-chocolate-shake", "category": "Shake" },
  { "id": 126, "title": "Pumpkin Spice Protein Bowl", "imgSrc": "pumpkin-spice-protein-bowl", "category": "Snack" },
  { "id": 127, "title": "Horchata Shake", "imgSrc": "horchata-shake", "category": "Shake" },
  { "id": 128, "title": "Chocolate Delight Shake", "imgSrc": "chocolate-delight-shake", "category": "Shake" },
  { "id": 129, "title": "Kathy's Tea Tips", "imgSrc": "kathys-tea-tips", "category": "Beverage" },
  { "id": 130, "title": "Loopy Fruit Shake", "imgSrc": "loopy-fruit-shake", "category": "Shake" },
  { "id": 131, "title": "Pumpkin Spice Latte", "imgSrc": "pumpkin-spice-latte", "category": "Beverage" },
  { "id": 132, "title": "Pumpkin Spice Roasted Brussels Sprouts", "imgSrc": "pumpkin-spice-roasted-brussels-sprouts", "category": "Appetizer" },
  { "id": 133, "title": "Buffalo Cauliflower Bites", "imgSrc": "buffalo-cauliflower-bites", "category": "Appetizer" },
  { "id": 134, "title": "Chai Cider Shake", "imgSrc": "chai-cider-shake", "category": "Shake" },
  { "id": 135, "title": "Cinnamon Toast Crunch Shake", "imgSrc": "cinnamon-toast-crunch-shake", "category": "Shake" },
  { "id": 136, "title": "Milk Chocolate Peanut Butter Cups", "imgSrc": "milk-chocolate-peanut-butter-cups", "category": "Snack" },
  { "id": 138, "title": "Chocolate Banana Oatmeal", "imgSrc": "chocolate-banana-oatmeal", "category": "Breakfast" },
  { "id": 139, "title": "Apple Pie Bars", "imgSrc": "apple-pie-bars", "category": "Snack" },
  { "id": 140, "title": "Lemon-Lime Cheesecake", "imgSrc": "lemon-lime-cheesecake", "category": "Shake" },
  { "id": 141, "title": "Isagenix Brownies", "imgSrc": "isagenix-brownies", "category": "Snack" },
  { "id": 142, "title": "Festive Fudge", "imgSrc": "festive-fudge", "category": "Snack" },
  { "id": 143, "title": "Green Mango Shake", "imgSrc": "green-mango-shake", "category": "Shake" },
  { "id": 144, "title": "Pumpkin Protein Muffins", "imgSrc": "pumpkin-protein-muffins", "category": "Snack" },
  { "id": 145, "title": "Coco IsaPro Cookies", "imgSrc": "coco-isapro-cookies", "category": "Snack" },
  { "id": 146, "title": "Summer Chai Iced Tea", "imgSrc": "summer-chai-iced-tea", "category": "Beverage" },
  { "id": 147, "title": "Chicken and Rice", "imgSrc": "chicken-and-rice", "category": "Entrée" },
  { "id": 148, "title": "Chocolate Crunch Custard", "imgSrc": "chocolate-crunch-custard", "category": "Snack" },
  { "id": 149, "title": "Valentine's Shake Bowl", "imgSrc": "valentines-shake-bowl", "category": "Snack" },
  { "id": 150, "title": "Protein Cookie Dough", "imgSrc": "protein-cookie-dough", "category": "Snack" },
  { "id": 151, "title": "Chocolate Protein Pancakes", "imgSrc": "chocolate-protein-pancakes", "category": "Breakfast" },
  { "id": 152, "title": "The Citrus Cooler", "imgSrc": "the-citrus-cooler", "category": "Beverage" },
  { "id": 153, "title": "Chunky Monkey Mini Protein Muffins", "imgSrc": "chunky-monkey-mini-protein-muffins", "category": "Snack" },
  { "id": 154, "title": "Strawberry Banana Protein Crepes", "imgSrc": "strawberry-banana-protein-crepes", "category": "Dessert" },
  { "id": 155, "title": "Pumpkin Protein Donuts", "imgSrc": "pumpkin-protein-donuts", "category": "Snack" },
  { "id": 156, "title": "Pumpkin Spice Protein Crepes", "imgSrc": "pumpkin-spice-protein-crepes", "category": "Dessert" },
  { "id": 157, "title": "Peanut Butter Protein Balls", "imgSrc": "peanut-butter-protein-balls", "category": "Snack" },
  { "id": 158, "title": "Hulk Juice", "imgSrc": "hulk-juice", "category": "Beverage" },
  { "id": 159, "title": "Dairy-Free Chocolate Protein Ice Cream", "imgSrc": "dairy-free-chocolate-protein-ice-cream", "category": "Dessert" },
  { "id": 160, "title": "Sweet-'N-Salty Popcorn", "imgSrc": "sweet-n-salty-popcorn", "category": "Snack" },
  { "id": 161, "title": "Salted Chocolate Caramel Protein Balls", "imgSrc": "salted-chocolate-caramel-protein-balls", "category": "Snack" },
  { "id": 162, "title": "Coconut Berry Delight", "imgSrc": "coconut-berry-delight", "category": "Shake" },
  { "id": 163, "title": "Chocolate Coconut Almond Shake", "imgSrc": "chocolate-coconut-almond-shake", "category": "Shake" },
  { "id": 164, "title": "Spicy Guacamole", "imgSrc": "spicy-guacamole", "category": "Appetizer" },
  { "id": 165, "title": "Fajita Skewers with Cilantro Pesto", "imgSrc": "fajita-skewers-with-cilantro-pesto", "category": "Entrée" },
  { "id": 166, "title": "IsaDelights and Nut Butter", "imgSrc": "isadelights-and-nut-butter", "category": "Snack" },
  { "id": 167, "title": "Berry Green Shake", "imgSrc": "berry-green-shake", "category": "Shake" }];

  recipeType: string = "Appetizer";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public modalCtrl: ModalController,
    public auth: AuthProvider) {

  }

  showRecipe(recipe: any) {
    var data: any = {
      title: recipe.title,
      imgSrc: recipe.imgSrc
    };

    const myModal = this.modalCtrl.create("RecipeModalPage", data);
    myModal.present();
  }

}