import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2011Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "annie-s": htmlString = this.getAnnieSSuccessStory(); break;
      case "anthony-s": htmlString = this.getAnthonySSuccessStory(); break;
      case "gary-s": htmlString = this.getGarySSuccessStory(); break;
      case "jake-f": htmlString = this.getJakeFSuccessStory(); break;
      case "jessica-p": htmlString = this.getJessicaPSuccessStory(); break;
      case "jill-b": htmlString = this.getJillBSuccessStory(); break;
      case "joseph-p": htmlString = this.getJosephPSuccessStory(); break;
      case "lisa-w": htmlString = this.getLisaWSuccessStory(); break;
      case "liz-m": htmlString = this.getLizMSuccessStory(); break;
      case "marina-b": htmlString = this.getMarinaBSuccessStory(); break;
      case "nathan-f": htmlString = this.getNathanFSuccessStory(); break;
      case "pamela-m-and-kyle-s": htmlString = this.getPamelaMAndKyleSSuccessStory(); break;
      case "rhonda-o": htmlString = this.getRhondaOSuccessStory(); break;
      case "rick-k": htmlString = this.getRickKSuccessStory(); break;
      case "todd-w": htmlString = this.getToddWSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAnnieSSuccessStory(): string {
    return `<h3>Flight Attendant Discovers Runway For Dreams</h3>
    <p>
      Annie has always been a big dreamer. But, when her marriage suddenly fell apart she was forced to change many of her dreams.
      A single mother raising two young children on her salary as a flight attendant, Annie found herself reconsidering
      her pathway.
    </p>
    <p>
      "I was sitting at my desk looking at my bank accounts and trying to decide which dreams I was going to live," recalls Annie
      of Ontario. "It really hurt to know that I wouldn’t be able to live all the dreams I had hoped for my children."
    </p>
    <p>
      Even with her tight budget, she realized she’d be spending less money following the 30-Day Cleansing and Fat Burning System.
      No longer would she have to spend as much on groceries or eating out; plus, she even had a more convenient, fast
      solution for her meals between flights, thanks to her high-quality, undenatured whey protein IsaLean® Shakes.
    </p>
    <p>
      "I had been overweight my entire adult life and it was time to start investing in myself so I could be healthier for my children,"
      explains Annie.
    </p>
    <p>
      When her Isagenix sponsor suggested the 2011 Isabody Challenge® with its $120,000 grand prize, this aspiring children’s book
      author knew winning would allow her to self-publish.
    </p>
    <p>
      Considering that all she had to lose was "excess fat," the 32-year-old signed up for Isagenix® and the Challenge and decided
      to go for her dreams (and her dream body!).
    </p>
    <p>
      As she put the products to the test, she recognized that Isagenix just made sense.
    </p>
    <p>
      "This wasn’t rocket science to follow," laughs Annie. "It was all the things I’d heard over the years, but wasn’t sure
      how to apply."
    </p>
    <p>
      On the road, Annie began exercising in her hotel rooms, using the products and watching the scale dip backward.
    </p>
    <p>
      One down side to her shrinking size? The cost of buying new clothes, but according to Annie some things are just worth it.
    </p>
    <p>
      "Not only am I a fit mom, I’m also a hip mom now!" laughs Annie.
    </p>
    <p>
      When she started the IsaBody Challenge, her size 12 flight attendant uniform fit well, but by the end just 15 weeks later,
      she had traded down to a size 4.*
    </p>
    <p>
      Perhaps the best part of Annie’s transformation was seeing how it has impacted her young children’s lives.
    </p>
    <p>
      "Before Isagenix, I was tired of eating chicken nuggets and fish sticks, but I just didn’t have the energy to cook a healthy
      meal for myself," shares Annie.
    </p>
    <p>
      "Now I’m learning new skills and my kids are actually eating—quinoa, turkey and even brussel sprouts."
    </p>
    <p>
      Plus, the kids even watch and help her as she works out at home. The children practice their counting skills and coordination
      as they do jumping jacks with their mom.
    </p>
    <p>
      Named the first-place winner of the Women 18-35 Category of the Challenge, Annie is thrilled by how her 39.5-pound* weight
      loss has changed her family, and her own life, for good.
    </p>
    <p>
      She has earned enough money to cover the costs of publishing her first book and is excited to continue pursuing her Isagenix
      business so she can publish the rest of the children series.
    </p>
    <p>
      "You never know where this journey is going to take you. Isagenix is the solution to living your dreams and making your body
      reflect your inner beauty," explains Annie. "As I was cleansing my body, I was also cleansing the negative self-talk
      from my mind. I’m now a better version of myself."
    </p>`;
  }

  private getAnthonySSuccessStory(): string {
    return `<h3>"Fat Tony" Becomes "Incredible Shrinking DJ"</h3>
    <p>
      From diet pills that took the life of a friend to low-carb fad diets, Anthony had tried it all. He’d put up with the fat
      jokes; the judgmental stares; even public ridicule at a comedy show over his size.
    </p>
    <p>
      Depressed and battling fatigue and anxiety at every turn, the 35-year-old from Pennsylvania was about to start scanning the
      phone book for gastric bypass doctors when an acquaintance from a motorcycle enthusiast forum mentioned Isagenix®.
    </p>
    <p>
      "I watched video after video about Isagenix and it seemed like everyone was sincere about their experiences," shares Anthony.
      "I decided to order it to see what would happen."
    </p>
    <p>
      He also joined the 2011 IsaBody Challenge® so he could have a cash incentive to keep him motivated.
    </p>
    <p>
      As he began replacing his breakfasts and dinners with nutrient-dense IsaLean® Shakes, he began to rethink his eating habits.
      Lunch used to consist of a large pepperoni pizza with extra pepperoni. Doing basic calorie calculations, he figured
      he could either have a huge salad with tuna or chicken, cherry tomatoes and light dressing, or eat one small burger
      to meet the suggested 400 to 600 calories for his midday meal. Suddenly, adopting a healthier lifestyle began to
      click.
    </p>
    <p>
      "It was hard the first week," laughs Anthony. "You might feel angry or other things because you’re not eating like you used
      to, but your body is adjusting to what you want it to do."
    </p>
    <p>
      A DJ by trade, his late night "regulars" knew him as "Big Tony" or "Fat Tony" in the clubs and restaurants. Weeks into his
      Challenge, people began to notice a difference.
    </p>
    <p>
      "They weren’t sure what to say—they wondered if I was sick or if I’d had an operation," recalls Anthony. "Then they started
      nicknaming me ‘the Incredible Shrinking DJ.’"
    </p>
    <p>
      Heavy his entire life, Anthony had never really exercised aside from playing football as a kid simply because he was "the
      biggest kid around."
    </p>
    <p>
      Soon, his mornings and afternoons included trips to the gym, long runs at the local high school’s track, and cycling around
      town. From only being able to walk 20 minutes on the gym treadmill to now running 5ks, Anthony says constantly setting
      and resetting goals kept him on the straight and narrow until he reached his current 140-pound weight loss.*
    </p>
    <p>
      Once a size 6XL and pant size 56, he did the unimaginable just a few short months ago: he walked into a mainstream department
      store to buy clothes.
    </p>
    <p>
      Unaware of his actual size, he began picking up size XL shirts and size 38 pants to see if he could possibly fit into them.
    </p>
    <p>
      "I put them on, looked in the mirror and saw that they actually fit," recalls Anthony. "I started laughing like a little
      kid and crying. I can shop in a normal store again."
    </p>
    <p>
      Recognized as the first place winner in the Men Age 18-35 Category of the 2011 Challenge, Anthony says he’s overwhelmed with
      gratitude for the recognition and $5,000 prize. He’s even starting to dream again.
    </p>`;
  }

  private getGarySSuccessStory(): string {
    return `<h3>Nevada Man Trades in His Blinders for a Better View</h3>
    <p>
      Gary never thought of himself as overweight; in fact, he considered himself relatively healthy compared to other people his
      age.
    </p>
    <p>
      That was until he started to recognize his many setbacks: 50 extra pounds, shrinking clothes and everyday body aches.
    </p>
    <p>
      Gary was out of shape.
    </p>
    <p>
      He was suffering from discomfort in his lower back, knee and feet. Walking for long periods of time was unbearable and taking
      him away from the one thing he cherished most, hiking with his wife.
    </p>
    <p>
      After hearing about the IsaBody Challenge® Gary came to the realization that change was necessary, but he was hesitant about
      how the Challenge could help him.
    </p>
    <p>
      "I was surprised by what the products did for people, but didn’t think it would transform me to the same degree," says the
      53-year-old.
    </p>
    <p>
      Determined to be as energetic and healthy as his friends Gary took the Challenge head on.
    </p>
    <p>
      "I remember thinking as I was taking the ‘before’ pictures for the Challenge and saying to Michelle, ‘I just don’t think
      I am in that bad of shape to be doing this,’" he recalls.
    </p>
    <p>
      Michelle saw what he couldn’t, so to support her husband, she decided to do the Challenge alongside him without officially
      signing up.
    </p>
    <p>
      After a short period on the 30-Day Cleansing and Fat Burning System Gary lost 20 pounds* and felt better than he had at age
      25.
    </p>
    <p>
      The boost increased his confidence and pushed him to move forward.
    </p>
    <p>
      He admits knowing about the $120,000 grand prize, but it wasn’t his primary motivation.
    </p>
    <p>
      "I wanted to be onstage alongside Jim and Kathy Coover," he says. "It was the additional perks: the stage presence, the Founders’
      Gala, the hotel and the camaraderie of the event that attracted me."
    </p>
    <p>
      Fortunately, the onstage presence is what he got. Gary took center stage in August and was recognized as the third-place
      winner in the Men’s 50+ Category. He dropped five pant sizes, three shirt sizes* and has little to no discomfort
      in his knees and feet.
    </p>
    <p>
      The best part is the Challenge proved the power of the Isagenix® products to Gary.
    </p>
    <p>
      His transformation left many awe-struck, including himself, but none more than his niece who joined Michelle’s Isagenix business
      soon after witnessing Gary’s results. She also entered the 2012 IsaBody Challenge. Thrilled by her determination
      Gary plans to coach her through the process.
    </p>
    <p>
      "I now look back at those pictures and understand why I needed Isagenix. I can’t believe how blind I was to my own physical
      health," he shares. "The setbacks and complacency I used to have are now replaced by energy, vitality and hope."
    </p>`;
  }

  private getJakeFSuccessStory(): string {
    return `<h3>Extreme Athlete Turns to Isagenix® for Healthy Recovery</h3>
    <p>
      Jake has always been passionate about extreme sports. His "need for speed" led him to a love for motocross and wakeboarding.
      However, that passion was cut short last year after two separate accidents left him bedridden and confined to a wheelchair.
    </p>
    <p>
      After suffering a torn ACL in his left leg in a wakeboarding accident, Jake then suffered yet another blow during a horrific
      motocross accident. With his quadriceps and ab muscles also torn, Jake began the painstaking process of healing and
      recovery, bedridden for two weeks, ultimately stuck in a wheelchair. The six-month culmination of the accidents and
      necessary rehabilitation transformed the once lean, 174-pound athlete to 215 pounds,* a far cry from his usual physique.
    </p>
    <p>
      With the goal of returning to extreme sports, Jake focused on getting back into peak shape.
    </p>
    <p>
      Introduced to Isagenix eight years earlier by his brother Shane, Jake knew the products worked because he’d already experienced
      the energizing effects as a mountain bike competitor in college.
    </p>
    <p>
      One stroke of luck amid the misfortune in his recovery time aligned exactly with the 2011 IsaBody Challenge®. For Jake, it
      was the perfect stepping stone to full recovery.
    </p>
    <p>
      With his brother as his trainer, and his wife of two years, Sarah, by his side, Jake set a personal IsaBody Challenge goal
      to go from relearning how to walk to reaching his previous six-minute mile pace in 5K and 10K races.
    </p>
    <p>
      "My first month in the IsaBody Challenge was really rehab," says Jake, a director of Fellowship of Christian Athletes. "There
      were no hardcore workouts, it was getting my muscles to rejoin and fire again."
    </p>
    <p>
      Within a few months, Jake had accomplished his goal. He also achieved another milestone weighing 180 pounds* for the first
      time since the accidents. "That was a breath of fresh air," he says. "To go from 215 pounds*, that was huge."
    </p>
    <p>
      By the end of the Challenge, Jake weighed 165 pounds*. He says the last 20 pounds took the most work. His competitive nature,
      results and drive to succeed earned him the second-place prize in the Men’s 18-35 Category of the 2011 IsaBody Challenge.
    </p>
    <p>
      Jake credits the IsaLean® Bars and IsaLean® Shakes for helping him reach his target weight.
    </p>
    <p>
      "I am that guy in the morning that just gets up and goes," he says. "Knowing what you eat can change so many outcomes: your
      skin, your energy and your performance highlights how nutritional value is so important."
    </p>
    <p>
      Since the Challenge, Jake and his wife have relocated to Houston, Texas. They’ve created a workout regimen that affords them
      quality time to work out and run together.
    </p>
    <p>
      Once in need of inspiration, Jake is now the inspiration to others.
    </p>
    <p>
      "You yourself have to experience the product and have a life change so that when you show other people you’re not just showing
      them something, you’re showing them something you’re a part of," says Jake.
    </p>
    <h3>Jake’s Tips for Success</h3>
    <ul>
      <li>Eat six small meals a day.</li>
      <li>Work out in the morning to burn calories longer and set small goals to achieve a week at a time.</li>
      <li>Drink lots of water and snack on almonds and apples during Cleanse Days as needed.</li>
      <li>Have an accountability partner or personal trainer for motivation and encouragement.</li>
    </ul>
    <h3>Jake’s Favorite Products</h3>
    <ul>
      <li>IsaLean Bars®</li>
      <li>IsaLean Shake</li>
      <li>Natural Rich Berry Cleanse for Life® powder</li>
    </ul>`;
  }

  private getJessicaPSuccessStory(): string {
    return `<h3>Wait-and-See Perspective Aids Mom’s Dramatic Transformation</h3>
    <p>
      For years the word "diet" was part of Jessica’s everyday lingo. It was her way of justifying her weight to herself and others.
    </p>
    <p>
      "I’ve always had a weight problem," shares the 30-year-old mom. "As I got older the problem just got worse."
    </p>
    <p>
      And, because of her weight, Jessica would often opt out of activities and sit on the sidelines. "I considered myself a spectator
      in life," says this Wyoming native.
    </p>
    <p>
      But inside, her heart was determined to finally follow through on her word and get fit.
    </p>
    <p>
      "I told everyone that 30 was my year," she says. ‘There comes a time when enough is enough."
    </p>
    <p>
      At 30 years old, Jessica had already given birth to two children. While she was madly in love with her new baby, she was
      also exhausted and overwhelmingly unhappy with her outward appearance.
    </p>
    <p>
      Driven by change, Jessica knew her only line of defense was to tell everyone her plan—especially her family. She was strong
      enough to recognize her own weaknesses, but also knew she needed everyone to hold her accountable in order for her
      to push forward.
    </p>
    <p>
      "I actually wanted to do the 2010 IsaBody Challenge® but found out too late," explains this stay-at-home mom. "So this year
      I was aware of the enrollment dates."
    </p>
    <p>
      To keep her goal in perspective Jessica started with the 9-Day Deep Cleansing and Fat Burning System.
    </p>
    <p>
      After using the 9-Day System™ frequently for a few months, Jessica discovered Ionix® Supreme and fell in love with the product.
      Today Ionix is a staple in her everyday maintenance.
    </p>
    <p>
      "I love coffee," she says. "I used to have three cups of coffee in the morning before I ran. Now, I have a shot of Ionix
      and I feel alive."
    </p>
    <p>
      For Jessica the Challenge marked multiple milestones in her life. Not only did she drop beneath 200 pounds* for the first
      time in six years, but she also ran her first 5k and 10k runs.
    </p>
    <p>
      Her friends and family were enthralled with Jessica’s newfound spirit especially her mom, who lost 63 pounds* in 2003 from
      Isagenix.
    </p>
    <p>
      Thanks to her unwavering efforts and determination, Jessica won third-place in the Women’s 18-35 Category for the 2011 Challenge.
    </p>
    <p>
      Now this 30-year-old stay-at-home mom can’t sit still. She wakes up each morning ready to embrace the day with her children.
    </p>
    <p>
      She’s also considering pursing a career as a personal trainer and becoming a health-and-wellness coach thanks to her newly
      dusted off self-esteem.
    </p>
    <p>
      "I have so much more potential than I gave myself credit for a year ago," she says while sniffling. "It’s an open door. I
      can set my mind on anything."
    </p>
    <h3>Jessica’s Tips For Success</h3>
    <ul>
      <li>Tell everyone what you’re doing and what your goals are. It’s a lot easier to follow through if there are people
        to hold you accountable. It also helps because you have a support system.</li>
      <li>Believe in yourself. If you keep telling yourself that it can’t be done, you won’t do it. Instead, tell yourself
        that you are no longer going to live the life you have been living. Break those old habits and step out of your
        comfort zone. Once you take a leap of faith, there are no boundaries and your potential is endless.</li>
      <li>Get moving! The weight is going to come off quicker and you’ll feel even more amazing if you incorporate physical
        activity into your daily routine.</li>
      <li>Don’t let yourself get super hungry. Eat healthy snacks often.</li>
    </ul>
    <h3>Jessica’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Amped Hydrate®</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJillBSuccessStory(): string {
    return `<h3>Biggest Loser Hopeful Becomes Biggest Winner in Life and IsaBody Challenge®</h3>
    <p>
      At 263 pounds and a size 22, Jill was at her wits end. She was desperate to rekindle her close-knit relationship with her
      eldest son, which had been strained due to her weight. She was ready to feel energetic again; ready to shake her
      food addiction for good.
    </p>
    <p>
      Though she began her relationship with Isagenix in 2002, she hadn’t ever truly committed to the lifestyle change. She’d cleanse,
      and then binge on food. Cleanse, binge on food.
    </p>
    <p>
      "I gave Isagenix a bad name," laughs Jill, a dental assistant from Utah. "People in my town must have been thinking ‘well,
      Isagenix must not work because look at Jill.’"
    </p>
    <p>
      Finally, she decided to try out for the Biggest Loser®. Filming her past experiences began to unravel the story she had held
      onto for decades: she was the fat one. As a third-grader, she recalls standing in the nurse’s office and being told
      she weighed more than the school nurse did. Immediately, her mom started her on Weight Watchers® and the dieting
      rollercoaster began.
    </p>
    <p>
      As she reached the semi-finals of the Biggest Loser, Jill made a pact with a friend that if she didn’t get on the show, then
      she would follow Isagenix by the book. Weeks later, she found out she didn’t make the cut. It was time to join the
      IsaBody Challenge® one last time and make the lifestyle change for good.
    </p>
    <p>
      "I was do or die," says Jill. "I knew this was going to help me."
    </p>
    <p>
      After watching her diet closely (no white sugar, flour, grains and limited dairy), using Isagenix and getting active again
      with running and biking, the weight began to come off. By the Biggest Loser finale, Jill had lost 131 pounds.*
    </p>
    <p>
      "I lost more than the female contestants and they were working out six to 10 hours a day," shares Jill. "I just sat on the
      couch and bawled because I was so proud of what I had achieved."
    </p>
    <p>
      Now a svelte size 4 and 132 pounds,* Jill has completed three half-marathons, jumps on the trampoline with her kids (even
      doing backflips!) and is no longer embarrassed by her appearance.
    </p>
    <p>
      "I live in the same town where I grew up and when I was struggling with my weight, if I saw someone I knew go into the grocery
      store, I would sit in my car and wait until they left," admits Jill.
    </p>
    <p>
      "I believe everyone should feel as amazing in their bodies as I do today," says Jill. "I’ve dreamed about this for so long.
      I’m a real person and if I can struggle for this long and make it here, anyone can do this, too."
    </p>
    <p>
      Crowned the 2011 IsaBody Challenge Grand Prize Winner, Jill’s $120,000 prize will go a long way in helping the family achieve
      financial freedom.
    </p>
    <p>
      But, that freedom is nothing compared to the freedom Jill says she now cherishes.
    </p>
    <p>
      Shortly after her transformation, her son asked her to climb a mountain together.
    </p>
    <p>
      "For a second, my fat brain told me I couldn’t do it, but then I realized that everything had changed," recalls Jill. "We
      climbed right up to the top and sat side by side. He told me with tears in his eyes ‘Mom, thank you for getting healthy
      for us.’"
    </p>
    <p>
      From kayaking, riding rollercoasters and bungee jumping to going swimming and running half-marathons, being active with her
      kids and accomplishing feats she never thought she’d be able to do has opened up her world, and her eyes, to a bright
      future.
    </p>
    <p>
      "I’m never going to sit on the sidelines ever again," says Jill. "I’m going to live my life to the fullest."
    </p>
    <h3>Jill’s Tips for Success</h3>
    <ul>
      <li>
        <strong>Stick to the System.</strong> The products work—you just need to follow the instructions. Be sure to watch what
        you eat during your 400-600 calorie meals. Avoid white sugar and flour if possible.</li>
      <li>
        <strong>Don’t Binge and Cleanse.</strong> We all fall off the bandwagon and eat the wrong things. Isagenix is forgiving,
        but don’t abuse it like I did.</li>
      <li>
        <strong>Create a Vision Board.</strong> Start dreaming! On a poster board, put pictures and words that capture what you
        want to accomplish. I wrote that I’d be 132 pounds and a size 4 on May 15, 2011 and I did it!</li>
      <li>
        <strong>Have a Support Team.</strong> Our team hosts Biggest Loser parties where everyone puts a little money in a pot
        and comes together every week. The person who lost the most body percent that week would get the cash and a crown
        on their head.</li>
      <li>
        <strong>Join the IsaBody Challenge.</strong> I sent in so many "before" pictures and never sent in my "after" until this
        year. Use the Challenge as extra motivation and incentive and just do it.</li>
    </ul>
    <h3>Jill’s Favorite Products</h3>
    <ul>
      <li>IsaPro® Vanilla</li>
      <li>Isagenix Snacks!™</li>
      <li>Ionix® Supreme liquid</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getJosephPSuccessStory(): string {
    return `<h3>"Diamond in the Rough" Rediscovers Dreams</h3>
    <p>
      A painful divorce and custody battle left Joseph emotionally drained and unhappy. But, rather than turning to smoking or
      drinking 15 years ago, the former Canadian Armed Forces serviceman took to the fast-food drive thru and began eating.
    </p>
    <p>
      As the weight piled on, acceptance from his family diminished to almost no relationship at all. Alone and feeling discouraged,
      Joseph wasn’t sure if he’d ever be his same old self again.
    </p>
    <p>
      Then, he met his wife.
    </p>
    <p>
      "She saw me for who I was," Joseph shares. "I was her diamond in the rough."
    </p>
    <p>
      After Lorraine stumbled across Isagenix®, she was convinced that it was the answer to helping her husband get healthier and
      back on track to reaching his true potential.
    </p>
    <p>
      Joseph wasn’t so convinced, even after she showed him a DVD featuring people who had lost 100, 200, even 300 pounds* with
      Isagenix.
    </p>
    <p>
      "I thought they were probably paid the big bucks to say what they were saying," laughs Joseph. "But, I looked for someone
      my own age and decided to track that person down to make sure it was true."
    </p>
    <p>
      Joseph’s sleuthing skills led him to Mark W. of Colorado who had lost 300 pounds* with Isagenix.
    </p>
    <p>
      "He put me through to his coach, Al, who phoned me every day," shares Joseph. "Al encouraged me through rough times and celebrated
      with me in the good times. His support has been priceless."
    </p>
    <p>
      He also decided to sign up for the 2011 IsaBody Challenge® to sweeten the deal and give him extra motivation to go after
      his goals to lose more than 100 pounds.
    </p>
    <p>
      Together, Joseph and his wife partnered up for success and began ridding their diet of processed foods and replacing them
      with Isagenix products. Their favorite product is Cleanse for Life®. He even says he can "drink it like juice" because
      he loves it so much. The couple also began staying on the outer aisles of the grocery store shopping for fruits and
      vegetables instead of potato chips and soda.
    </p>
    <p>
      Another bonus? Since they were replacing meals, they noticed that their grocery bills were going down. With the extra money
      saved in their grocery budget, they used the money to put toward their product costs.
    </p>
    <p>
      After Joseph lost more than 100 pounds* during the IsaBody Challenge, the once size 50 also noticed that he began saving
      money on his clothes after reaching size 40.*
    </p>
    <p>
      "A pair of jeans at the big and tall store cost me $60, but then I would pay only $15 for a pair at the regular store," says
      Joseph. "You can fit two of me in my old pair of pants now."
    </p>
    <p>
      Awarded first place in the Men 36-49 Category of the Challenge, Joseph says his life is completely different.
    </p>
    <p>
      "I was truly given a new lease on life—my confidence is back," says Joseph. "I’ve been changed from a fat man with a low
      self-image to a man who is loving and enjoying life."
    </p>
    <p>
      Joseph and his wife now enjoy going back to the fast-food restaurant, but only to savor a cup of coffee and plan how they
      will tell others about Isagenix. The pair love traveling places, working out together and Joseph is looking forward
      to taking his fitness to the next level.
    </p>
    <p>
      "I’ve always loved fitness, but that dream was shattered when I gained all the weight," explains Joseph. "Now I’m working
      on getting a fitness instructor’s license."
    </p>
    <p>
      While Joseph has accomplished his initial goal to lose 100 pounds,* he says he’s still aiming higher.
    </p>
    <p>
      "Now I’m aiming for the 200-Pound Club," shares Joseph. "I’m giving my wife her dream, so she can walk down the street with
      a man in good shape and it feels so good."
    </p>`;
  }

  private getLisaWSuccessStory(): string {
    return `<h3>Unexpected Surprises Takes this Mother on a Life-Changing Journey</h3>
    <p>
      Lisa is used to surprises. She has two children, a husband, a house and her own business—she’s always ready for anything
      thrown her way. What she wasn’t prepared for? Two more little ones!
    </p>
    <p>
      After the birth of her surprise third child, Lisa gave up a successful painting and decorating business to focus her energy
      on Isagenix®. She entered the IsaBody Challenge® determined to lose her post-baby weight. A former personal trainer,
      Lisa was a member of Isagenix seven years earlier and knew her health-and-wellness goals were attainable through
      the Challenge.
    </p>
    <p>
      Weeks into Lisa’s regimented workout she noticed she was bloated and unable to get rid of the excess water weight. Concerned,
      Lisa consulted a doctor only to find out she was 17 weeks pregnant with baby No. 4. Shocked and unprepared for her
      fourth pregnancy, Lisa discontinued working out.
    </p>
    <p>
      "I thought…well this isn’t going to work for some ‘after’ pictures," the 41-year-old chuckled.
    </p>
    <p>
      A year after giving birth to her fourth child, Lisa’s life spiraled out her control. She was unhappy with her appearance,
      unable to lose the extra baby weight, and beyond exhausted. She knew something had to change.
    </p>
    <p>
      Starting with a 30-Day Cleansing and Fat Burning System, Lisa began her life-changing transformation. She was challenged
      even more when she heard that the 2011 IsaBody Challenge had upped the ante to $120,000 for the grand prize winner.
    </p>
    <p>
      "I am a very competitive person so it was just what I needed," says the mother of four. "I needed something to strive toward."
    </p>
    <p>
      Two weeks into her workout, Lisa felt like a whole new person. She swapped her daily five cups of coffee for Ionix® Supreme
      and Ageless Essentials™ with Product B™.
    </p>
    <p>
      Lisa also knew that in order for her to place in the competition she needed to chisel and lean out her physique to match
      that of a fitness competitor. Her daily motivation sprung from looking at the cover of a book featuring a fitness
      model, which she left on her kitchen counter. She worked with her online trainer, changed her diet and put the Isagenix
      products to the test.
    </p>
    <p>
      "I created a formula just for me. I took the supplements at certain times of the day when I knew my body needed them most,"
      she explains. "It’s like my trainer and I created the perfect storm."
    </p>
    <p>
      Her quick, six-month transformation flabbergasted her trainer, who’s been in the field for 20 years. The best part? Her hard
      work paid off and she won second-place in the Women’s 36-49 Category for the 2011 IsaBody Challenge.
    </p>
    <p>
      Now Lisa is pursuing fitness full time and competing as a figure and fitness model. She’s also earned her Pro Card 10 months
      after starting Isagenix.
    </p>
    <p>
      "I was driven by my own ‘why’ factor," she says. "If you don’t know why you’re wanting to shed excess pounds or why you’re
      wanting to transform your body, then you’ll have a really hard time sticking to what it is you set out to do."
    </p>`;
  }

  private getLizMSuccessStory(): string {
    return `<h3>23 Years of Dieting Over!</h3>
    <p>
      I had felt uncomfortable in my own skin since I was 12. I found comfort in food during high school which continued into my
      twenties and thirties. When I did lose weight I would just put it all back on again and more. In total I had been
      dieting for 23 years! My partner Shane and my three-year-old son Max are both very active which I struggled with.
      I had no energy or motivation to play with Max; I had low confidence and was embarrassed to go out in public. I hated
      having my photo taken because I was so embarrassed of my appearance.
    </p>
    <p>
      I entered the IsaBody Challenge® in the hope that I could finally make a change. A turning point for me was celebrating my
      40th birthday with just 11 weeks left to go in the challenge. It was then I really decided I would no longer allow
      myself to live like this and I began my transformation for real. Every day I listened to IsaBody Challenge calls;
      I went to the gym six days a week doing cardio in the morning and weights at night. On the advice of Susan Sly I
      even started doing Bikram Yoga which was way out of my comfort zone!
    </p>
    <p>
      I have experienced an amazing physical and emotional transformation. My self confidence has improved dramatically; I now
      love clothes shopping, going to the beach and even enjoyed having my ‘after’ photos taken for the challenge! Max
      and Shane have their mummy and partner just the way they want; full of life, energy and happiness. My goal for the
      future is to use what I have learnt from the IsaBody Challenge to inspire others.
    </p>`;
  }

  private getMarinaBSuccessStory(): string {
    return `<h3>From Tailspin to Freedom: Marina Rediscovers Energy and Life With Isagenix®</h3>
    <p>
      Marina’s life was in a tailspin. Overcome by anxiety and fear, she could not will herself to leave her home. Meanwhile, her
      husband maintained the home, tended to their two daughters and did his best to try to help her.
    </p>
    <p>
      Doctors didn’t believe they could help her and at one point told Marina and her husband that her life would likely never
      change. They painted a bleak picture of low expectations and a poor quality of life.
    </p>
    <p>
      "I immediately said that I don’t accept that for myself," recalls Marina of that fateful day. "There’s a future for me and
      I am going to heal."
    </p>
    <p>
      The bad news turned into good news for Marina. She committed to finding the right counselor to get through her stress. Little
      by little, Marina began to come back.
    </p>
    <p>
      But, she was still 220 pounds and struggling to lose the 90 pounds she had put on during that paralyzing period. Luckily,
      she came across someone at a women’s university event who was wearing an Isagenix® shirt.
    </p>
    <p>
      "I had a friend who had lost 100 pounds, but I just hadn’t thought it was for me," explains Marina. "I asked her if I would
      get tired of the products and finally, I just realized I wouldn’t know until I tried it."
    </p>
    <p>
      She began with the 30-Day Cleansing and Fat Burning System and was shocked when the excess weight began to come off. She
      heard about the 2011 IsaBody Challenge® and committed to, as her husband often says, "go broke or go home."
    </p>
    <p>
      She’d add berries and Ionix® Supreme to her IsaLean® Shake, an orange and Amped Hydrate® or a host of other items. Needless
      to say, Marina soon discovered that she was never going to get bored with her products.
    </p>
    <p>
      Months later, she was down nearly 50 pounds* and transformed from a size 20 to a size 8.* Awarded first place in the Women
      50+ Category of the 2011 Challenge, Marina says she’s floored by how good she feels.
    </p>
    <p>
      "Once, I could barely walk around the block and now I can cycle 110 to 135 kilometers at a time," shares Marina. "I even
      do regular hiking and yoga to stay fit."
    </p>
    <p>
      Her confidence growing daily, she’s proud to have overcome the emotional hurdles that kept her frozen in fear for so long.
      "I used to be afraid to be slim because I didn’t want to attract unwanted attention," says Marina. "My internal story
      has changed and I know I can be slim and safe at the same time."
    </p>
    <p>
      Everything in Marina’s life has changed now. Her family is closer than ever before, she and her husband’s marriage is feeling
      younger and happier and Marina feels like the best version of herself.
    </p>
    <p>
      "People say that I walk differently; that I walk taller and hold my head up," shares Marina. "I look and feel so confident
      now."
    </p>
    <p>
      "There really is hope and healing," adds Marina. "This is where I’m meant to be and Isagenix has been a big part of my healing
      journey."
    </p>`;
  }

  private getNathanFSuccessStory(): string {
    return `<h3>Higher Education Administrator Regains Confidence</h3>
    <p>
      One minute talking to Nathan and he’ll leave you in stitches… of laughter.
    </p>
    <p>
      A self-proclaimed "doctor" in music-know-it-allness, this funnyman once ruled the airwaves as a D.J. in college but has
      since stepped away from his soapbox and stepped up his slimnastics.
    </p>
    <p>
      Weighing 368 pounds* at his heaviest, Nathan was no newcomer to diets. In fact, he has tried most of them; yet always struggled
      to keep the weight off. The culprit for this larger-than-life personality’s matching physique was the on-the-go lifestyle
      that was crammed with pursing his master’s in higher education and late-night chow-downs.
    </p>
    <p>
      After regaining all but six pounds from a previous 110-pound weight loss, Nathan felt hopeless. He was tired of yo-yo dieting.
    </p>
    <p>
      "I remember thinking my apartment was either spotless or messy; either I had money or I didn’t; either I weighed 264 pounds
      or I weighed 368 pounds, there was no balance to my life," says Nathan, a native New Yorker.
    </p>
    <p>
      Introduced to Isagenix® by his father as a birthday gift, Nathan and his dad split the cost of a 30-Day Cleansing and Fat
      Burning System. His very first week, Nathan lost 10 pounds* and regained his confidence.
    </p>
    <p>
      As he gradually lost weight every week, Nathan began transforming his tight 60-inch waist to a 38-inch waist* by walking
      every night. He used his "skinny" clothes from his previous weight-loss attempt as an incentive along with a tattered,
      red button-down shirt which served as his ultimate mark.
    </p>
    <p>
      "Now, my favorite exercise is walking into the Salvation Army and donating all the clothes that no longer fit," he laughs.
      "I often think there is a man behind me, following the same journey, only 30 pounds heavier and in need of ‘better’
      fitting clothes. It’s my way of helping with his journey."
    </p>
    <p>
      Soon, Nathan was 70 pounds lighter.* Walking progressed to weight training, then cycling, yoga, kettlebell training, and
      eventually rock climbing. "I am getting better at rock climbing, especially as my belly gets smaller because I can
      get closer to the wall," jokes Nathan.
    </p>
    <p>
      He entered the IsaBody Challenge® as added motivation for his ever-shrinking waistline. After completing his Challenge period,
      Nathan had lost 42 pounds* and earned the third-place spot in the Men’s 18-35 Category for the 2011 IsaBody Challenge.
      To date, Nathan has lost 81 inches (more than six feet in circumference) off his body and 144 pounds.*
    </p>
    <p>
      Since graduating, Nathan, who has a master’s in higher education administration, has moved to South Dakota and accepted a
      position in Residence Life at South Dakota State University. He’s also entered his second IsaBody Challenge and became
      a Consultant for Isagenix.
    </p>
    <p>
      "I’ve always wanted to try my hand at sales," says the Mount Rushmore resident. "During my first month I signed up 19
      people and created an IsaBuddies Facebook page. I believe it’s important for people to be able to stay in touch and
      motivate each other when working on getting healthier."
    </p>
    <p>
      Not bad for a former disc jockey.
    </p>
    <p>
      "When it comes to health, you can either pay for it now by being healthy or pay for it later with a quadruple bypass. The
      question is: How do you want to spend your money? For me," he says. "It came down to that decision. I was a little
      over a year from turning 30 when I started Isagenix. I figured I could either be 400-plus pounds by then or be in
      the best shape of my life; I think I made the correct choice!"
    </p>
    <h3>Nathan's Tips for Success</h3>
    <ul>
      <li>Really work on getting in tune with your body. It’s going to take hard work and focus but it’s important to realize
        the difference between what you want and what your body needs. Ask yourself, "Did I really want those donuts before
        I saw them or am I just eating out of routine?”</li>
      <li>This is going to be a lifelong commitment so make sure you’re learning about yourself as you go along. The same goes
        with you starting a health regimen. No one is overweight for just one reason, so as you progress through your journey
        make sure you learn the good from the bad. You’re not perfect and you’re going to make mistakes as you progress
        through this. Even a mistake has a teachable moment.</li>
      <li>Be hungry for knowledge; not just food. There is a world of information at your fingertips so get out there and learn
        about ways to be healthy. Don’t be afraid to try new things. It might be adding teas to your diet, trying a new
        dish, a new workout routine, etc. Shake it up and get yourself out there. Try a yoga class, swimming, run a marathon,
        anything. Just keep moving forward and enjoy the ride.</li>
      <li>A lot of these changes are going to come from within but at the same time don’t forget the people that are around
        you cheering you on. If it’s not your immediate family or friends, work with your fellow Isagenix friends because
        they’re going through the same journey as you. They can be the strength and accountability you need when you’re
        feeling like you can’t go any farther.</li>
    </ul>
    <h3>Nathan's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>Ageless Essentials™ Daily Pack with Product B™</li>
    </ul>`;
  }

  private getPamelaMAndKyleSSuccessStory(): string {
    return `<h3>Mother-Son Duo Slims Down and Inspires City to Get Healthy</h3>
    <p>
      IsaLean® Shakes were already a staple of Pamela’s household. As a teenager, her son Kyle had come home raving about the high-quality
      protein shakes after having one for breakfast at a friend’s house. But beyond that, the pair still struggled to get
      healthy and create an Isagenix® healthy lifestyle.
    </p>
    <p>
      After returning home during a break from his university, Kyle noticed that both he and his mother had gained weight.
    </p>
    <p>
      "He said ‘Okay, Mom, let’s do this IsaBody Challenge® together,’" recalls 49-year-old Pamela of Ontario. "And that was it.
      I knew I was going to stick with it because I couldn’t let my child down."
    </p>
    <p>
      The pair devised a plan that included following the 30-Day Cleansing and Fat Burning System to a T, working out regularly
      and keeping their eyes on the 2011 Challenge’s $120,000 grand prize.
    </p>
    <p>
      With their plan solidified, the mother-son duo parted ways and set to work; Kyle back at his university and Pamela pursuing
      her career and goals at home. Thanks to regular phone calls and emails, their excitement remained fueled, especially
      as they shared their successes with one another.
    </p>
    <p>
      When Kyle finally returned home weeks later, both of their jaws hit the floor.
    </p>
    <p>
      "We just hugged each other and told each other ‘you look amazing,’" reflects Pamela. "We just believed and achieved; that’s
      what our Challenge was all about."
    </p>
    <p>
      Pamela, who was once a "tight size 10" had whittled down to a size 4.* Kyle’s 36-inch waist shrunk to a 29.* The most unexpected
      part of their weight loss? Having to purchase new wardrobes.
    </p>
    <p>
      Though getting lean and healthy was satisfying for the duo, they knew they wanted to take it to another level.
    </p>
    <p>
      Next up: getting their city of Brampton, Ontario healthy. They set to work creating a family event that addressed eating
      healthy, exercising and more. The event included an exercise class with the goal to break the Guinness Book of World
      Records for the largest outdoor family circuit training event ever held. Ultimately, they helped inspire other Canadians
      to lose weight, with over 1 million pounds pledged to be lost.
    </p>
    <p>
      Their energy contagious and their confidence surging, Pamela and Kyle began doing things they’d never done before. Kyle took
      his shirt off at the pool for the first time in his adolescent life.
    </p>
    <p>
      "I never wanted to take my shirt off before," explains Kyle. "Now I’m proud to look like this and I don’t feel like people
      are looking at me for a bad reason. They’re looking at me and thinking ‘wow.’"
    </p>
    <p>
      Pamela felt great in a bikini for the first time, 20 years after having her two children.
    </p>
    <p>
      "I loved how I felt as a whole and all of a sudden things weren’t gray anymore," shares Pamela. "I could never have imagined
      how good I could feel and how close I feel to Kyle."
    </p>
    <p>
      Their relationship brought even closer together by the Challenge, Kyle and Pamela say they were floored when they found out
      that they were the first-place winners of the Group Category of the 2011 IsaBody Challenge.
    </p>
    <p>
      Kyle is currently testing to be a certified personal trainer and is anxious to graduate college so he can pursue his Isagenix
      business full time. Pamela is now "attracting fabulous, good friends and business partners" because of Isagenix.
    </p>
    <p>
      "We’re dreaming big," says Pamela. "This is so big; it’s just not us anymore."
    </p>`;
  }

  private getRhondaOSuccessStory(): string {
    return `<h3>Jersey Grandma Turns Back the Hands of Time, Recapturing Her Youthful Look</h3>
    <p>
      After 21 years of marriage Rhonda found herself in a place she never expected: a single mother of two, working full time
      to maintain a stable foundation for her family.
    </p>
    <p>
      Life was not easy living on one income. Long hours forced Rhonda to make poor eating choices, and before long, the excess
      weight began to pile on.
    </p>
    <p>
      By 50, Rhonda was entering the change of life and says her stomach looked as if she was six months pregnant. She started
      to feel self conscious and became discouraged by the 238 pound* woman staring back at her from the mirror.
    </p>
    <p>
      A teacher by trade, Rhonda decided to educate herself on proper nutrition and attended a few classes. She began implementing
      what she learned into her daily cooking and over time, lost 40 pounds and four dress sizes.
    </p>
    <p>
      "I’ve always been between sizes 16-20 for the better part of nearly 20 years," she says. "It was great to finally see that
      kind of change."
    </p>
    <p>
      Over the next few years, Rhonda started to gain weight again and her body began to feel the strain. Her knees began to hurt,
      her ankles started to swell and walking was leaving her breathless; weekend errands resulted in Rhonda returning
      home for an afternoon nap.
    </p>
    <p>
      Tired of yo-yo dieting, Rhonda made a decision to forgo any future diet programs and instead join a gym.
    </p>
    <p>
      Within days of joining a gym she ran into an old friend who told her about Isagenix®. Excited, she went home and combed the
      health-and-wellness Website and even decided to attend a meeting where she met Isagenix Top Income Earner Jimmy Smith.
      Touched by Smith’s words, Rhonda decided to attend 2010 Celebration where she witnessed IsaBody Challenge Grand Prize
      Winner Holly D. winning the crown. Inspired, she decided to join Isagenix and also enter the 2011 IsaBody Challenge.
    </p>
    <p>
      Starting with the 30-Day Cleaning and Fat Burning System, Rhonda decided to do a 9-Day Deep Cleansing and Fat Burning System
      within her first 30-Day System to jumpstart her weight-loss efforts. She lost 11 pounds within the first few weeks
      and by the time she hit her next milestone she was 28 pounds lighter and 85 inches smaller.*
    </p>
    <p>
      "I have renamed Ionix® Supreme my ‘Golden Fountain of Youth,’" she jokes. (It’s her favorite product.)
    </p>
    <p>
      At the end of her Challenge period, Rhonda had lost a total of 55 pounds and 150 inches. She also stepped into a size 9/10
      dress for the first time in 20 years.*
    </p>
    <p>
      Rhonda credits her nutrition with Isagenix, daily workouts, twice weekly cycling classes and twice weekly personal training
      sessions for her incredible transformation.
    </p>
    <p>
      "The best part is seeing people you haven’t seen in a long time and being unrecognizable to them," she shares. "Those reactions
      validate my transformation over and over."
    </p>
    <h3>Rhonda’s Tips for Success</h3>
    <ul>
      <li>Keep your metabolism burning fat by snacking every few hours. Carry your water bottle! Drink 8-10 glasses of water
        a day. The goal is to keep your metabolism active, which will allow your body to burn fat continuously.</li>
      <li>Move your body daily! Exercise is essential to feeling good and looking better helping to reshape your body. You
        can begin by walking around the neighborhood, riding a bike or going to a gym.</li>
      <li>Stick to the plan! If you are doing a 9-Day Deep Cleansing and Fat Burning System or a 30-Day Cleansing and Fat Burning
        System make sure you cleanse without cheating. During your Cleanse Day, drink plenty of water. Deep Cleanse Days
        are key to releasing weight and getting control of overeating. Additionally, cleansing every night by drinking
        2 ounces of Cleanse for Life® before going to bed will help to yield results.</li>
      <li>Meals should always include plenty of fresh vegetables, fruits, and lean cuts of meats. There are many great recipes
        online. Look for recipes that will allow delicious tasting food! Isagenix is not a diet—it’s a lifestyle change.</li>
    </ul>
    <h3>Rhonda’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Orange Amped Hydrate®</li>
      <li>Ionix® Supreme</li>
      <li>Orange Amped Hydrate</li>
      <li>Cleanse for Life® powder</li>
    </ul>`;
  }

  private getRickKSuccessStory(): string {
    return `<h3>Big Game Hunter Blazes Trail For His Isagenix® Team</h3>
    <p>
      Rick is used to chasing down wild game in the barren, tundra-like landscapes of Alaska. As a big game guide, Dall sheep and
      bear kept him in business. But, Isagenix® also kept the entrepreneur in business as well.
    </p>
    <p>
      A top leader for the company, 59-year-old Rick admits that bad knees and a bad back left him too achy to pursue sports and
      activity beyond his outdoor hunting routines. That all changed, however, when he learned about the new Isagenix®
      Joint and Pain Relief System.
    </p>
    <p>
      "I was surprised when the pain reduced and I really noticed a difference in my joints," shares Rick, after trying the Ageless
      Joint Support™ tablets and Ageless Pain Relief™ Cream. "I realized that I could join the IsaBody Challenge® and finally
      work out the way that I’d always wanted."
    </p>
    <p>
      Extra motivated by the newly announced $120,000 grand prize, Rick set to work developing a workout regimen to whip his body
      into tip-top shape. He stuck to the 30-Day Cleansing and Fat Burning System and committed to his overall health,
      even encouraging his existing and new team members to join him on the Challenge.
    </p>
    <p>
      "I’ve always believed that a leader demonstrates what’s possible," explains Rick. "After being in the company for four years,
      I knew I was going to do it and stay persistent and consistent, even if I felt like it or not."
    </p>
    <p>
      As he pursued daily weightlifting and hour-long cardio routines, he began to notice that his performance and capacity out
      in the field began to explode. Soon, he was even outperforming the young clients as he powered through strenuous
      11-hour hikes up glaciers or hauled out hundreds of pounds of animal. All along, his IsaShaker™ bottle, high-quality
      undenatured whey protein IsaLean® Shake and IsaLean Bars accompanied him as his fuel.
    </p>
    <p>
      "Honestly, it’s easier to do Isagenix when you’re traveling than it is to do anything else," says Rick. "Plus, the IsaLean
      Shake does more for you physically than the expensive dehydrated food."
    </p>
    <p>
      Rick even took his favorite products with him and used them as his main food for 10 days during a long hunt in the remote
      Alaska wilderness.
    </p>
    <p>
      He adds "It’s awesome super food and I felt and functioned great." Back at home, life also began to change.
    </p>
    <p>
      "My kids noticed the difference immediately," shares Rick. "I was able to do things with the grandkids that I never could
      before, like jumping on the trampoline."
    </p>
    <p>
      Named the 2011 Challenge’s 1st-place winner of the Men 50+ Category, Rick proudly lost 31 pounds* and is now sporting a 34-inch
      waist,* leaving him with a chiseled physique and a more youthful countenance.
    </p>
    <p>
      "I feel so much younger and look so much younger," says Rick. "Isagenix products have done wonderful things to help me maintain
      my youth and I love Product B™."
    </p>
    <p>
      Rick now faithfully uses his Isagenix products daily and says he’s proud to be an even stronger example to his team members
      of what is possible with Isagenix.
    </p>
    <p>
      "A leader picks up the heaviest pack and breaks the trail," shares Rick. "I can’t expect anyone to do something I haven’t
      done myself. My team has accomplished amazing things and it’s been a lot of fun."
    </p>`;
  }

  private getToddWSuccessStory(): string {
    return `<h3>Ontario Man Settles the Score on Water Skis</h3>
    <p>
      Todd is an extremist.
    </p>
    <p>
      Growing up, he never thought twice about what he ate. His meals usually consisted of two or three helpings and all the sweets
      he could eat.
    </p>
    <p>
      His mom repeatedly told him that if he didn’t control the amount of food he ate, it would one day catch up with him.
    </p>
    <p>
      She was right.
    </p>
    <p>
      At 25, Todd noticed the pounds slowly creeping up, but attributed them to his increased workouts. A quick peek in the mirror
      proved that Todd was wrong. He wasn’t nearly the fit fellow he thought he was.
    </p>
    <p>
      Over the next 15 years his weight escalated along with his eating habits. Fad diets would only keep the weight off for short
      durations of time before returning.
    </p>
    <p>
      He admits that "none of the diets were sustainable."
    </p>
    <p>
      During a 2009 summer vacation to a friend’s cottage in Crane Lake, Todd and his friends decided to water ski. After two failed
      attempts that landed him belly up in the water, Todd was determined to hang on. He did…only he was flying backwards
      across the water—his weight had snapped the rope that connected him to the boat.
    </p>
    <p>
      "I guess you can say that was my breaking point," he jokes.
    </p>
    <p>
      At his heaviest he was tipping the scale at 250 pounds.
    </p>
    <p>
      Seeing the scale reach 250 pounds left Todd feeling down. He stopped training for the year’s CN Tower climb and no longer
      played with his kids.
    </p>
    <p>
      Ironically, it was the same cottage friend that introduced Todd and his wife, Denise, to Isagenix®. The couple decided to
      give it a try and ordered a 30-Day Cleansing and Fat Burning System. Todd lost 12 pounds* fairly quickly. He was
      so proud of his initial weight loss that he became afraid of running out of his products, so he immediately ordered
      another 30-Day System™.
    </p>
    <p>
      Todd initially set his sights on small weight-loss goals of just 10 pounds at a time. Each time he conquered his 10-pound
      milestone he would raise the bar and strive to lose another 10 pounds.* By the middle of winter, Todd was releasing
      weight so consistently that he decided to set a goal to run a 5K with his 10-year-old son in Nova Scotia a few months
      later. That summer Todd completed the run in 31 minutes, a tremendous achievement for the Nova Scotia native.
    </p>
    <p>
      Amazed by Todd’s current weight loss, his friend suggested Todd sign up for the IsaBody Challenge®. Motivated by his own
      success, Todd signed up. He became significantly more excited when he learned about the grand prize of $120,000.
    </p>
    <p>
      "I kicked my workout into high gear," he says.
    </p>
    <p>
      By the end of the 24-week Challenge, Todd had lost a total of 50 pounds* and took second-place in the Men’s 36-49 Category.
      He’s since lost an additional 15 pounds.*
    </p>
    <p>
      Now the fitter fellow is training for the 2011 CN Tower Climb. His objective is to climb the 144-story building in less than
      15 minutes, three minutes less than his previous year’s climb.
    </p>
    <p>
      As for water skiing, Todd is no longer afraid of foundering in the lake and has conquered the sport once again, sans any
      rope snaps.
    </p>
    <h3>Todd’s Tips For Success</h3>
    <ul>
      <li>Drink lots of water. The more the better.</li>
      <li>Stick with it; it is only 24 weeks and once it is done you will have a new you and a new lifestyle. You will not
        want to go back.</li>
      <li>Don’t be afraid to work out on a Cleanse Day. I have had some of my best workouts during or the day after a Cleanse
        Day!</li>
      <li>You CAN do it. I can think of thousands of reasons why you should not give up!</li>
    </ul>
    <h3>Todd’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Chocolate Cream Crisp IsaLean® Bars</li>
      <li>Vanilla IsaPro®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }
}
