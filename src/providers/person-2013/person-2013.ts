import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2013Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "aaron-h": htmlString = this.getAaronHSuccessStory(); break;
      case "angie-t": htmlString = this.getAngieTSuccessStory(); break;
      case "belinda-s": htmlString = this.getBelindaSSuccessStory(); break;
      case "brandon-c": htmlString = this.getBrandonCSuccessStory(); break;
      case "carol-g": htmlString = this.getCarolGSuccessStory(); break;
      case "carolyne-r": htmlString = this.getCarolyneRSuccessStory(); break;
      case "chris-b": htmlString = this.getChrisBSuccessStory(); break;
      case "dr-david-n": htmlString = this.getDrDavidNSuccessStory(); break;
      case "emily-s": htmlString = this.getEmilySSuccessStory(); break;
      case "giovanni-r": htmlString = this.getGiovanniRSuccessStory(); break;
      case "glen-o": htmlString = this.getGlenOSuccessStory(); break;
      case "jennifer-anne-s": htmlString = this.getJenniferAnneSSuccessStory(); break;
      case "joe-m": htmlString = this.getJoeMSuccessStory(); break;
      case "kelly-ann-z": htmlString = this.getKellyAnnZSuccessStory(); break;
      case "mike-t": htmlString = this.getMikeTSuccessStory(); break;
      case "nils-m": htmlString = this.getNilsMSuccessStory(); break;
      case "dr-paul-b": htmlString = this.getDrPaulBSuccessStory(); break;
      case "richard-b": htmlString = this.getRichardBSuccessStory(); break;
      case "richard-r": htmlString = this.getRichardRSuccessStory(); break;
      case "shannon-k": htmlString = this.getShannonKSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAaronHSuccessStory(): string {
    return `<h3>Former Football Player Makes the Cut With Isagenix</h3>
    <p>
      Aaron is a team player. Four Minor League football championships and his prestigious inclusion in the 2009 Minor League Football
      Hall of Fame prove it.
    </p>
    <p>
      After an injury forced him to retire in 2009, he went on to become a full-time computer engineer. He’s also the former head
      coach of the 2-Time Champion Connecticut Bearcats.
    </p>
    <p>
      And, while Aaron was still maintaining a very active lifestyle, he was out of shape and needed to fix it.
    </p>
    <p>
      That’s when Aaron’s brother Trevor introduced him to Isagenix®.
    </p>
    <h3>A True Believer</h3>
    <p>
      "My brother was adamant about sharing the products," laughs the father of one.
    </p>
    <p>
      But, before Aaron would commit to ordering a 30-Day Cleansing and Fat Burning System, he wanted to better understand the
      nutritional benefits of the products.
    </p>
    <p>
      "I admit I was impressed," adds Aaron. "But I was still very skeptical what the products could do for my body.
    </p>
    <p>
      What made Aaron a true believer was Ionix® Supreme and IsaLean® Pro.
    </p>
    <p>
      "I tried it and couldn’t believe how quickly my body recovered from a workout," shares the Connecticut resident. "Let’s face
      it, as you get older, it takes longer to recover, I wish I had this when I was playing ball.”
    </p>
    <h3>Becoming a Product of the Product</h3>
    <p>
      That experience solidified Aaron’s decision to make good on three additional commitments: joining the IsaBody Challenge®,
      competing in his first-ever Regional Fitness America Model Championships and sharing these amazing nutritional products
      with the world.
    </p>
    <p>
      Working out 45 minutes a day, and working with his company The Body Lab–Aaron increased lean muscle mass and chiseled his
      physique. He also went from a 36-inch waist to a 29-inch waist.*
    </p>
    <p>
      His jaw-dropping transformation wowed everyone around him, including the Isagenix judges, earning him the title of 2013 IsaBody
      Challenge Celebration Finalist. He also won first place in the Regional Fitness America Model Championships held
      at Foxwoods Casino.
    </p>
    <p>
      Now this "product of the product" has everyone asking how he did it which, in turn, has ignited his Isagenix business.
    </p>
    <p>
      "The business is just starting to take off," says Aaron. "Most jobs require you to check in and check out, swapping time
      for money. The idea that you can work this business no matter where you are in the world is the biggest perk.”
    </p>
    <p>
      Now his earned Isagenix income is helping him cover his product costs and fuel his Isagenix business.
    </p>
    <p>
      "As a kid I didn’t have a lot," shares Aaron. "Isagenix gives me and my family the chance to create a little cushion, go
      on vacation and spend more quality time together. It’s priceless.”
    </p>
    <h3>Aaron's Tips for Success</h3>
    <ul>
      <li>Keep God in the middle of all you do.</li>
      <li>Set goals and don’t let negativity steer you away.</li>
      <li>Surround yourself with people more successful than you.</li>
      <li>Help others to be the best that they can be.</li>
    </ul>
    <h3>Aaron's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaPro®</li>
      <li>Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>e+™</li>
    </ul>`;
  }

  private getAngieTSuccessStory(): string {
    return `
    <h3>Isagenix Helps Stay-At-Home Mom Regain Balance</h3>
    <p>
      Angie was always a go-with-the-flow kind of girl who rarely got ruffled by life. But when an unexpected challenge arrived
      with her five-year-old daughter, everything changed.
    </p>
    <p>
      From an early age, Angie could see that her daughter was struggling developmentally, but didn’t know why or what was causing
      it. She spent her days and nights pouring over literature and research, worrying, wondering and speculating as to
      what it could be. Finally, Angie’s daughter was diagnosed with Developmental Coordination Disorder.
    </p>
    <p>
      She also had a restrictive diet because of sensitivities to a number of foods which required Angie to prepare organic meals
      three times daily for her daughter, while caring for her family of four.
    </p>
    <p>
      Inevitably, Angie’s stress levels began to skyrocket and she began burying her worries in food, resulting in a very unhealthy
      diet—and lifestyle.
    </p>
    <p>
      "My days started with coffee, then around noon a diet soda, coffee again around 4 p.m. and wine by 5 p.m.," shares Angie.
    </p>
    <p>
      "I had become a hypocrite," she adds. "I was getting accolades for being a healthy cook for my daughter yet I wasn’t eating
      healthy."
    </p>
    <p>
      As her stress climbed, so did her weight.
    </p>
    <h3>The Turning Point</h3>
    <p>
      "I knew I needed to change," shares this Calgary resident. "I wanted to change; I just didn’t know where to start."
    </p>
    <p>
      Thanks to a play date with a former coworker, Angie was introduced to Isagenix for the first time.
    </p>
    <p>
      That day Angie ordered her first of many 30-Day Cleansing and Fat Burning Systems and enrolled in the IsaBody Challenge®.
    </p>
    <p>
      She also learned about the Isagenix business opportunity and decided she was going to help supplement her family’s income
      by also sharing Isagenix.
    </p>
    <p>
      In between taking the kids to school and going to the gym, Angie began opening her home to share Isagenix with other moms.
    </p>
    <p>
      "I just share my story," she says. "It’s about fun. It’s what women thrive off of. It’s about social gatherings, feeding
      off of each other’s stories, listening and sharing—not just the negative, but the triumphs as well."
    </p>
    <h3>Sharing Her Story—and Her Success</h3>
    <p>
      Her willingness to share her story is quickly catapulting her business—and her life—forward.
    </p>
    <p>
      Today, this 2013 IsaBody Challenge finalist is in the best shape of her life; she’s lost 38 pounds,* and traded her size
      10/12 dress for a size 2/4.*
    </p>
    <p>
      She’s also propelled her business and is a Crystal Manager.
    </p>
    <p>
      "This business doesn’t require you to work eight hours a day," shares Angie. "It doesn’t even require that you leave your
      home. You can put in as much as you want to get out of it."
    </p>
    <p>
      By working a few hours each day, Angie and her husband can afford to send their daughter to private school and save for future
      family vacations. Angie’s husband, Corey, was treated to a set of golf clubs thanks to his IsaWallet®.
    </p>
    <p>
      "I wasn’t expecting the success with the business," shares Angie. "It has changed our lives in so many ways."
    </p>
    <p>
      "Financial rewards are wonderful," explains Angie. "But, I have the opportunity to not only meet and affect women’s lives,
      but lots of people’s lives."
    </p>
    <p>
      Being a former Challenge participant also adds credibility to Angie’s story when discussing Isagenix with new Associates.
      Not only can she share her experiences, but she has access to a huge network of former participants who love to share
      their inspirational stories too.
    </p>
    <p>
      A perk she also makes available to her team.
    </p>
    <p>
      "Things that we never thought possible are now becoming possible. I am finally the role model my children deserve,” says
      Angie.
    </p>
    <h3>Angie’s Tips for Success</h3>
    <ul>
      <li>Broadcast your intentions loud and clear.</li>
      <li>Write an accountability letter to yourself and your family.</li>
      <li>Never forget your "why.”</li>
      <li>Have a plan, get organized and stay focused.</li>
    </ul>
    <h3>Angie’s Can-Do List of Products</h3>
    <ul>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getBelindaSSuccessStory(): string {
    return `<h3>Louisiana Mother Uses Challenge to Rebuild Her Life</h3>
    <p>
      Belinda knows that life can change in an instant because it happened to her. In 2004, her husband was suddenly diagnosed
      with inoperable stomach cancer and given six months to live.
    </p>
    <p>
      At the time, she had two young sons and had just started building her Isagenix® business.
    </p>
    <p>
      Eight years and many stressful events later, the petite mother of two found herself standing in front of a mirror screaming
      at the reflection staring back at her.
    </p>
    <p>
      "I weighed 205 pounds and had two butts," jokes the Louisiana native. "I was so focused on my kids that I’d forgotten about
      myself."
    </p>
    <p>
      Luckily, Belinda had been involved with Isagenix for nine years and was familiar with the IsaBody Challenge®. She admits
      that she mostly used it in the past to help promote her business.
    </p>
    <p>
      "I hated working out," admits Belinda. "But, I knew if I wanted to change, I had to start there."
    </p>
    <p>
      Her first course of action was getting a trainer.
    </p>
    <p>
      As fate would have it Belinda quickly discovered a trainer lived less than a mile from her house while driving home from
      work. So, she took action and made an appointment to meet him.
    </p>
    <p>
      "We talked about my goal of winning the Challenge and agreed upon weekly workouts," shares Belinda.
    </p>
    <p>
      Now, change took precedence on Belinda’s daily "to-do" list. Starting with the 9-Day Deep Cleansing and Fat Burning System
      and then transitioning to the 30-Day Cleansing and Fat Burning System, Belinda signed up for the Challenge and hit
      the gym regularly.
    </p>
    <p>
      Over her 24-week journey, she released a total of 50 pounds* and whittled her waistline from a size 16/18 to a size 5/6.*
    </p>
    <p>
      As she moves forward as a newfound woman, she plans to focus on her business, return to Paid-As Executive, and help others
      overcome self doubt.
    </p>
    <p>
      "When my husband died, we lost everything. I had to file for bankruptcy and I knew it was only a matter of time until my
      house went into foreclosure," shares Belinda. "I had two kids and only $8 to my name, but I knew at the right time,
      when I was able to give my Isagenix business 110 percent it would be the tool to rebuild my life."
    </p>
    <h3>Belinda's Tips for Success</h3>
    <ul>
      <li>Decide and commit mentally to succeed by setting realistic goals. I visualize my body transforming and ultimately
        achieving a lifestyle change to be fit for life.</li>
      <li>Be diligent in using the 30-Day System™ to achieve optimum results. I found the system to be flexible and the products
        convenient for my lifestyle. I always have IsaLean® Pro, an IsaLean® Bar, IsaDelight Plus™, FiberSnacks!™ or Isagenix
        Snacks!™ on hand.</li>
      <li>Drink lots of water. Drink one to two glasses prior to eating each meal. I drank a minimum of one gallon daily.</li>
      <li>Exercise daily—a minimum of 30 minutes of cardio four days a week.</li>
    </ul>
    <h3>Belinda's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake in Creamy Dutch Chocolate</li>
      <li>IsaDelight Plus™ in Milk and Dark Chocolate</li>
    </ul>`;
  }

  private getBrandonCSuccessStory(): string {
    return `<h3>Fitness Trainer Gains an Edge with Isagenix</h3>
    <p>
      Brandon’s a personal trainer with a "who’s who" client list of North York, Toronto.
    </p>
    <p>
      Early morning wake-up calls, grueling workouts, and eating right are all part of his strict daily regimen; there’s nothing
      that he will ask his clients to do that he wouldn’t do himself.
    </p>
    <p>
      So, when he was offered the chance to try the 30-Day Cleansing and Fat Burning System with IsaLean® Pro and share the opportunity
      with others, he couldn’t resist.
    </p>
    <p>
      But, before Brandon could start experiencing the same transformations he’d heard about, he decided to add a few additional
      targeted solutions to his system to boost his energy and performance: Isagenix Greens!™ and an extra bottle of Ionix®
      Supreme. Then, he joined the IsaBody Challenge® as added accountability.
    </p>
    <p>
      "As someone who is fairly fit on a consistent basis, I always like having a goal and sticking to that goal to really dial
      in nutrition and training," shares the Ontario native. "It helps to push myself and see what my body can accomplish."
    </p>
    <p>
      After eight fully focused weeks of nonstop workouts and clean eating, Brandon started to notice a significant improvement
      in his overall body composition and muscle definition.
    </p>
    <p>
      "By week 12, I had more energy, was less stressed and was sleeping through the night," shares the first-ever IsaBody Challenge
      Energy and Performance Solution Category winner.
    </p>
    <p>
      But, the true proof came on October 21 when Brandon competed in his first-ever fitness competition and won second prize.
    </p>
    <p>
      "Since the Challenge, I have kept the same protocol as when I was in the Challenge," admits Brandon. "Like going to bed
      at 10:30 p.m. every night."
    </p>
    <p>
      Months later, Brandon is proud of his achievements, including clinching a first-place finish at another fitness competition,
      his ultimate goal.
    </p>
    <h3>Brandon's Tips for Success</h3>
    <ul>
      <li>Doing weekly deep cleanses.</li>
      <li>Getting 7 to 8 hours of sleep a night.</li>
      <li>Exercising a minimum of 20 to 30 minutes every day.</li>
      <li>Mixing Isagenix Greens! with every IsaLean Pro Shake.</li>
    </ul>
    <h3>Brandon's Favorite Products</h3>
    <ul>
      <li>French Vanilla IsaLean® Pro</li>
      <li>Isagenix Greens!™</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>IsaFruits®</li>
    </ul>`;
  }

  private getCarolGSuccessStory(): string {
    return `<h3>Retired Teacher Proves Age is Just a Number</h3>
    <p>
      Carol was an avid runner and cyclist. In fact, some of her fondest memories were participating in 5k’s and all-day bike rides
      with her family. But one thing that was not a constant for Carol was the number on the scale.
    </p>
    <p>
      By 58, she was 40 pounds overweight and struggling with her health.
    </p>
    <p>
      "Maybe I was enjoying life a little too much," jokes Carol, a retired special education teacher.
    </p>
    <p>
      And, while the road to making a healthy recovery looked promising, Carol was intimated by the thought of losing weight. Over
      the years, she had tried almost every diet on the market and had never really experienced lasting success.
    </p>
    <p>
      "I remember thinking, ‘My gosh here I am; I am about to turn 60 in two years and my life was going down hill,’" admits
      Carol.
    </p>
    <p>
      Luckily, a few days after learning the extent of her health challenges, she heard an Isagenix® radio ad and decided to look
      into the company. After learning about the products’ nutritional benefits and reading several success stories, this
      teacher decided to become the student and try the 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      Much to her surprise she released 17 pounds* and 36 inches* off of her body within her first few months with Isagenix.
    </p>
    <p>
      "I woke up one morning and said ‘this works!’ I want more," remembers Carol.
    </p>
    <p>
      She even decided to attend 2012 Celebration in Phoenix, Arizona—that’s also when she learned about the IsaBody Challenge®
      and immediately signed up.
    </p>
    <p>
      By the end of Carol’s Challenge, she had released 30 pounds* and whittled her waistline from a size 14 to a size 4.* Her
      favorite part? Looking years younger!
    </p>
    <p>
      "Isagenix is my key to ageless beauty," she says.
    </p>
    <p>
      Thanks to her stunning transformation, she became the first-ever IsaBody Challenge Healthy-Aging Solution Winner, won a $1,000
      cash and the chance to win a spot aboard the IsaBody Challenge® Transformation Cruise.
    </p>
    <h3>Carol's Tips for Success</h3>
    <ul>
      <li>Check in daily with your coach, especially in the beginning, and don’t be afraid to ask questions. Plus, learn successful
        tips to make weight loss more fun!</li>
      <li>Customize a playlist for your iPod or MP3 player. Choose music that’s peppy and upbeat.</li>
      <li>Make a vision board with pictures and phrases that help inspire your weight loss and fitness goals. It’s helpful
        to glance at it first thing in the morning, while setting your intention for the day, and then again before bed.</li>
      <li>Take Ageless Essentials™ with Product B™ daily. It’s all right there in convenient A.M./ P.M. packets and it takes
        the guesswork out of nourishing your body daily.</li>
    </ul>
    <h3>Carol's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ageless Renewal Serum</li>
      <li>IsaDermix® Intensive Renewal Night Cream</li>
    </ul>`;
  }

  private getCarolyneRSuccessStory(): string {
    return `
    <h3>Isagenix Millionaire Leads by Example with the IsaBody Challenge</h3>
    <p>
      Carolyne, an Isagenix Millionaire, found that her claim to fame has always been her commitment to consistent, persistent
      action. Her small steps repeated over time allowed her to have the success she has today.
    </p>
    <p>
      Over time however, Carolyne discovered that this attribute was missing in one part of her Isagenix life—exercise. Although
      Carolyne diligently incorporated Isagenix products into her lifestyle, she never fully committed, or felt the motivation
      to work out. After signing up for the IsaBody Challenge® eight times, and never completing, Carolyne decided in January
      of 2013, it was time for a new body.
    </p>
    <p>
      "I entered the Isa Body Challenge, this time with an intention and commitment to complete it and have my ‘after’ picture,"
      said Carolyne.
    </p>
    <p>
      "What would be different this time?" she adds, "my integrity."
    </p>
    <h3>Overcoming Challenges</h3>
    <p>
      For three months Carolyne did not see results with her workout routine, but she persevered, and continued with her commitment
      to complete the Challenge. She knew that the results would come in time if she did not give up on herself. When things
      got tough, she drew her inspiration from within and found motivation to help others.
    </p>
    <p>
      "I believe that many people do not complete the Challenge because they lose their focus and don’t have a big enough ‘why,’"
      says Carolyne. "My focus was on donating any money I won to folks whose lives would be changed through the work my
      cousin, a renowned doctor, does to repair the damage of leprosy. Seeing those young children battling leprosy, in
      my mind helped propel me through tough workout days."
    </p>
    <h3>How Her Lifestyle Changed</h3>
    <p>
      After completing the Challenge, Carolyne had not only gained a much healthier lifestyle but she was able to donate $1,000**
      to her cousin’s hospital.
    </p>
    <p>
      She is now stronger and leaner and feels so much better about her body image. She wants to encourage others to embrace the
      IsaBody Challenge.
    </p>
    <p>
      "I am proud of finishing and being an example to others on my team," shares Carolyne. "I want them to know that they can
      be finishers too! I am encouraging my team to embrace the IsaBody Challenge and to do it with their team members!
      I want more people to have that ‘after’ picture," Carolyne says.
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Stay in the game. Giving up is not an option!</li>
      <li>Plan your schedule for the week.</li>
      <li>Surround yourself with mentors and like-minded people</li>
    </ul>
    <h3>Carolyne's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Shake</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getChrisBSuccessStory(): string {
    return `
    <h3>Chef Puts Healthy Living Back On The Menu</h3>
    <p>
      Simply put, Christopher was not taking care of himself. After working long hours every week, this restaurant owner and chef
      found himself exhausted, with no energy. However, Christopher also found he could not get a good night’s sleep. After
      Christopher’s wife, Dawn, was introduced to Isagenix, Christopher was hesitant to commit to the products.
    </p>
    <p>
      "I had to get my mind in the right spot. It wasn’t until I went on a hike, weighing 311 pounds, that I realized how terrible
      I felt," says Christopher.
    </p>
    <p>
      Soon after, Dawn ordered Christopher a 30-Day Cleansing and Fat Burning System.
    </p>
    <h3>Christopher’s Motivation</h3>
    <p>
      Christopher had many components in his life motivating him to continue his weight-loss journey. In fact, one of the main
      reasons he decided to begin the journey was for his 19-year-old daughter.
    </p>
    <p>
      "I knew I wanted to walk her down the aisle one day," says Christopher.
    </p>
    <p>
      "My motivation was to stay healthy for my kids. So the day after Thanksgiving, I started," he adds.
    </p>
    <p>
      Another source of motivation for Christopher came from those he inspired along the way. As Christopher began to lose the
      weight, he realized he was carrying a torch for others. His weight-loss journey became a source of motivation for
      other people in his life, and soon enough, Christopher realized that his success was not tied to himself, but tied
      to the people he inspired along the way.
    </p>
    <h3>The True Recipe for Success</h3>
    <p>
      Christopher shared that if he, an Italian restaurant owner, could be successful, anyone could.
    </p>
    <p>
      "Food is a part of my culture and lifestyle. I am surrounded by it daily!"
    </p>
    <p>
      "After our daughter’s ‘Fathers’ Weekend’ at College I was amazed and ashamed of what I had become," says Christopher. "Now
      my life has changed dramatically. People do not even recognize me and my IsaBody!’"
    </p>
    <p>
      "If you want to do it (lose weight), you’re going to do it," says Christopher.
    </p>
    <p>
      Christopher now makes time for what is important. He shares, "Being a chef, Isagenix has given me the recipe for success.
      It’s a simple plan to follow. I have great results and I’m feeling good."
    </p>
    <h3>Next Steps</h3>
    <p>
      Christopher, who has lost more than 100 pounds* with Isagenix, isn’t losing momentum. Although he is close to reaching his
      health goals, he has a bright outlook for his financial future as well. "My wife and I are growing a really strong
      team right now," he says. "We are working with more couples sharing both the health and wealth aspects of Isagenix.
      We plan to take our business to the next level by working with those couples and helping them understand what it
      takes to succeed. We hope to share with them how they can get their products paid for and further than that, share
      with them how to grow a successful team."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Take it one day at a time. Use your tools and follow the program. No excuses!</li>
      <li>Stay hydrated. Drink water and then drink some more water!</li>
      <li>Be accountable. It is not just about you anymore. It is about all the people who have joined in your journey and
        how you have affected their lives. Be a product of the products!</li>
    </ul>
    <h3>Chris' Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake</li>
      <li>e+™</li>
    </ul>`;
  }

  private getDrDavidNSuccessStory(): string {
    return `<h3>Avid Marathoner Crosses the Finish Line to Better Health</h3>
    <p>
      It’s hard to think of someone living in pain for a day or two, let alone 30 years. For Dr. David N. that was everyday life.
    </p>
    <p>
      He had suffered a major neck injury playing football in his early 20s, but that never stopped this avid athlete from competing.
      After football, he went on to become a champion bodybuilder and professional trainer. He enjoyed being in peak performance;
      the pain was ancillary when it came to getting in shape.
    </p>
    <p>
      His other passion was nutrition. Dr. David only fueled his body with the best nutrition or what he thought was good nutrition
      at the time.
    </p>
    <p>
      By his 40s, Dr. David was a highly respected chiropractor in California and an avid marathon runner and triathlete. He had
      taken almost every product on the market promoting good health until a client of his introduced him to Isagenix®.
    </p>
    <p>
      Over the next three years, he would become a faithful product user, fine tuning his already fit physique and beating his
      best running times. When clients asked what his secret was, he’s shared, slowly growing his Isagenix business.
    </p>
    <h3>A Hurdle in the Road</h3>
    <p>
      Life was great. He was healthy and pain free most days until one September day.
    </p>
    <p>
      "I experienced excruciating pain in my neck, down my arm and was losing strength and function of my hand," shares Dr. David.
      "My hand was going numb and I found writing and even holding a pen difficult."
    </p>
    <p>
      After years of battling through the occasional pain, Dr. David was forced to finally address and rectify the problem.
    </p>
    <p>
      "I knew what I would need in my body for rebuilding and healing and I had total faith in the Isagenix products," adds Dr.
      David.
    </p>
    <p>
      So, he focused on fueling his body with his favorite Isagenix products. He also joined the IsaBody Challenge®. Joining the
      Challenge forced him to concentrate on getting stronger. Plus, he was turning 50.
    </p>
    <p>
      "I didn’t want to be an old 50-year-old," jokes Dr. David.
    </p>
    <h3>Striding to Success</h3>
    <p>
      At the end of Dr. David’s 16-week journey he achieved several milestones. He had lost 15 pounds,* gained several pounds of
      lean muscle, turned 50, hiked the Grand Canyon from top to bottom and back in less than 10 hours, and competed in
      the Redondo Beach Triathlon and San Francisco Half-Marathon.
    </p>
    <p>
      He was celebrating his health by competing athletically and pain free.
    </p>
    <p>
      "The nutrition made the difference and helped to transform my life," shares the 2013 IsaBody Challenge Celebration Healthy
      Aging Solution Category Winner.
    </p>
    <p>
      The Challenge also helped to catapult his Isagenix business.
    </p>
    <p>
      "Having never been a network marketer there was, and still is, a big learning curve," shares the 1-Star Golden Circle and
      Executive. "I’m using the Challenge as a platform to recruit and motivate."
    </p>
    <p>
      He and his family are also experiencing the benefits of residual income and the time freedom it is affording him. As a result,
      Dr. David is contemplating a big business move—retiring to focus solely on his Isagenix business.
    </p>
    <p>
      "I’m grateful for these products and for the opportunity to be rewarded financially for sharing them," he says.
    </p>
    <h3>Dr. David’s Tips for Success</h3>
    <ul>
      <li>Work out at the same time daily…preferably mornings.</li>
      <li>Consume your shake immediately after your workouts.</li>
      <li>Be consistent with your regimen throughout the week and allow yourself a cheat meal on weekends.</li>
      <li>Live in gratitude for the things you have and for the things coming to you in your life.</li>
    </ul>
    <h3>Dr. David’s Favorite Products</h3>
    <ul>
      <li>Natural Vanilla IsaLean® Pro with IsaFruits® Packets and Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Natural Oatmeal Raisin IsaLean Bars</li>
      <li>e+™</li>
    </ul>`;
  }

  private getEmilySSuccessStory(): string {
    return `<h3>Personal Trainer Uses Challenge to Prep for Big Day</h3>
    <p>
      Emily, like many young adults, enjoyed unhealthy treats and energy drinks. When her fitness coach suggested she start limiting
      her sugar intake, Emily felt like she craved sugar even more.
    </p>
    <p>
      "I began drinking sugar-free energy drinks and eating sugar free Jell-O…diet cola, you name it. If it was sugar free and
      diet, I wanted it," shares Emily.
    </p>
    <p>
      Emily soon realized that her body was struggling to lose weight. It wasn’t until she switched fitness coaches and swapped
      her calorie-restrictive diet for an Isagenix lifestyle, that she really saw her body completely transform.
    </p>
    <h3>Why Emily Joined the IsaBody Challenge</h3>
    <p>
      At first Emily thought that the IsaBody Challenge® was only for those with a bunch of weight to lose.
    </p>
    <p>
      "For someone like me that has to lose 5 to 10 pounds, I didn’t see the purpose because I didn’t think I could win," said
      Emily.
    </p>
    <p>
      It wasn’t until she saw the "before" and "after" pictures of the 2012 IsaBody Finalist Elizabeth M. that she realized
      the Challenge wasn’t just for weight loss.
    </p>
    <p>
      "I started to think that really anyone can do it, and then it clicked. I decided to use the IsaBody Challenge to get ready
      for my wedding," shares Emily.
    </p>
    <p>
      Emily, who had become so stressed during her wedding planning process, gained 15 pounds, and in doing so, her wedding dress
      no longer fit. Emily not only slimmed back down to fit into her dress on the big day, but has since been able to
      maintain her ideal weight.
    </p>
    <h3>Emily’s Motivation</h3>
    <p>
      Emily admits that although she began the Challenge to fit back into her wedding dress, her motivation to keep working out
      and get healthy started to come from other, unexpected, sources.
    </p>
    <p>
      "I shared my progress over social media. At first I was nervous to share my ‘before’ pictures, I’ll admit, I was even embarrassed.
      But I wanted to inspire people, and show them that even personal trainers can get off track."
    </p>
    <p>
      By sharing her story, Emily found new inspiration every day along her IsaBody™ journey.
    </p>
    <h3>What’s Next?</h3>
    <p>
      Emily plans to keep entering the IsaBody Challenge, not with the grand prize in mind, but as a tool to keep herself accountable.
      Emily explains, "I want to maintain a balance."
    </p>
    <p>
      Emily also shared that she’s enjoyed building her business, sharing her recipes and developing coaching videos to help her
      clientele.
    </p>
    <h3>Emily's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Cleanse for Life®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getGiovanniRSuccessStory(): string {
    return `<h3>Proud Grandfather Loses 100 Pounds</h3>
    <p>
      Isagenix Manager, Giovanni R. was 49 years old when he found Isagenix®. He was in poor health and weighed 320 pounds. He
      had just undergone knee-replacement surgery and was raising his two grandchildren (then 4 and 7 years old). He knew
      his knee was only the tip of the iceberg when it came to his health; if he didn’t make a change, he knew he wouldn’t
      live to see them graduate.
    </p>
    <h3>Why Isagenix?</h3>
    <p>
      When his physical therapist Mark J. introduced him to Isagenix, he had his doubts.
    </p>
    <p>
      "I was skeptical because, like most people, I’ve done the dieting thing before," admits Giovanni. "But, when I watched the
      videos about past winners who were the same size as me, I started to see real results from real people who I could
      really talk to. That’s what made me say ‘I am going to do this.’"
    </p>
    <h3>Giovanni’s Accomplishment</h3>
    <p>
      Today, Giovanni is more than 100 pounds lighter,* a proud member of the Isagenix 100-Pound Club and has the energy needed
      to keep up with his grandkids.
    </p>
    <p>
      Aside from losing the weight, he was most excited about being able to sleep lying down. For the last 15 years, he has slept
      in a recliner because of other associated health concerns.
    </p>
    <p>
      "A week and a half after I started the program, I was reading my grandkids a goodnight story," shares Giovanni. "And, I fell
      asleep. I woke up around 7 a.m. the next morning, but it wasn’t until 9 a.m. that I realized I had slept through
      the night."
    </p>
    <h3>Giovanni’s Next Goal</h3>
    <p>
      Now, he’s focused on getting his Isagenix business up and running so he can be financially secure and leave something behind
      for his grandchildren.
    </p>
    <h3>Giovanni’s Tips for Success</h3>
    <ul>
      <li>Follow the program as it was laid out by Isagenix as much as you can.</li>
      <li>Affirm to yourself every day that you are making a lifestyle change for the better.</li>
      <li>Keep yourself connected to local and national Isagenix events.</li>
    </ul>
    <h3>Giovanni’s Favorite Products</h3>
    <ul>
      <li>IsaPro®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>e+™</li>
    </ul>`;
  }

  private getGlenOSuccessStory(): string {
    return `
    <h3>Agricultural Farmer Returns to His Former Elite Athlete Shape</h3>
    <p>
      As a retired elite athlete in the West Australian Football League (WAFL), Glen was rapidly gaining weight from his inability
      to exercise because of physical pain. Shocked by his exhaustion, lack of energy, digestive issues, high blood pressure
      and weight gain, this agriculture farmer was looking for a change.
    </p>
    <p>
      Glen hesitated to try Isagenix, at first thinking it was too expensive, but when it was simplified for him as being just
      $6 a meal, Glen began his transformation.
    </p>
    <h3>His Proud Achievements</h3>
    <p>
      Starting with the 30-Day Starter Pak, Glen released 18 pounds in 30 days and 30 inches overall.* He knew the Cleanse for
      Life® was the key to releasing pounds. After joining the IsaBody Challenge®, he experienced major improvements in
      weight loss, energy and his general well-being, no longer experiencing aches or pains, even gaining the ability to
      exercise again.
    </p>
    <p>
      Not only did Glen drop to 30" from 36" in pant sizes,* but his body shape had also almost returned to that of fifteen years
      ago when he was playing in the WAFL.
    </p>
    <p>
      Soon enough, people were witnessing his results and wanted to know what he was doing.
    </p>
    <h3>Health Leads to Wealth</h3>
    <p>
      Rejuvenated, this 4-Star Golden Circle, 2-Star Crystal Executive agricultural farmer with no university degree or experience
      in network marketing earns approximately $12,000 a month.**
    </p>
    <p>
      Hooked on Isagenix for life, Glen and his wife Karen want to share their love of Isagenix products with as many people as
      they can. What else does Glen plan on accomplishing?
    </p>
    <p>
      Glen shares, "Growing our team, so they are all getting paid."
    </p>
    <h3>Glen's Tips for Success</h3>
    <ul>
      <li><strong>Duplicate.</strong> People are not duplicable, but tools and systems are.</li>
      <li><strong>Keep it simple.</strong> Anyone can do it. We are all on an equal playing field.</li>
      <li><strong>Be patient.</strong> Results vary and come at different speeds. Just stick to the system.</li>
    </ul>
    <h3>Glen's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>FiberSnacks!™</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getJenniferAnneSSuccessStory(): string {
    return `<h3>One Woman’s Determination Leads to More Confidence and Control</h3>
    <p>
      Jennifer-Anne was a new mother at 40 years old with her first child and working in the finance industry in Hong Kong. Before
      Isagenix®, she was sleep deprived and stressed from handling a new baby along with her full-time job. She also suffered
      often from colds, didn’t exercise and made poor eating choices.
    </p>
    <p>
      As a result, she gained weight and lost confidence in how she looked.
    </p>
    <p>
      When she first tried Isagenix products, she released 22 pounds* and maintained that weight loss, but then the pounds gradually
      crept back on.
    </p>
    <p>
      "The weight gain was more pronounced when we relocated to Penang as the lifestyle and food there is not conducive to maintaining
      a healthy weight if you aren’t careful," shares Jennifer-Anne.
    </p>
    <h3>A Change of Scenery</h3>
    <p>
      Surrounded in a hot climate by people in bikinis at the pool or beach, Jennifer-Anne felt ashamed that her clothes weren’t
      properly fitting her anymore. She realized that she had to stop "dieting" and commit to the lifestyle change.
    </p>
    <p>
      Jennifer-Anne had halfheartedly joined the IsaBody Challenge® in the past, but never completed. After hearing 2010 IsaBody
      Challenge Grand Prize Winner Holly D. at the March Hong Kong Celebration, she knew the Challenge could be huge for
      her personal health and business growth in Malaysia.
    </p>
    <p>
      After starting with the 9-Day Cleansing and Fat Burning System, she immediately ordered a President’s Pak and has been using
      Isagenix products ever since. For the IsaBody Challenge, she followed two back-to-back 9-Day Systems and lost 16
      pounds as of June 2013 after the end of the first round, losing 24.2 pounds and lowering her body fat to 9 percent
      with a 22.9 percent BMI down from 26.9 percent overall.* Her best milestone was easily completing her first Warrior
      Boot Camp, an extreme boot-camp class, and recovering quickly.
    </p>
    <p>
      "For me, the weight loss and maintaining that weight loss has really impacted my life in terms of confidence, fitness and
      energy levels as well as my overall health," shares Jennifer-Anne. "I also don’t crave unhealthy food anymore and
      eat ‘clean and green’ as much as I can."
    </p>
    <h3>Teaching Internationally</h3>
    <p>
      Now 1-Star Silver Circle, and Manager Jennifer-Anne is a holistic nutritionist, running detox programs in Hong Kong and Malaysia
      using Isagenix systems. She is quickly building her business in Singapore and Penang.
    </p>
    <p>
      With a plan to run more 10-kilometer races and to become stronger, faster and leaner, Jennifer-Anne adds, "I will be teaching
      at more schools and collaborating with more local businesses in Penang, Singapore and Hong Kong to grow my Isagenix
      business and share this amazing company and our superior products with as many people as possible."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Anyone can do it. The products are amazing and to do the business, you just need to put them in your body and then
        tell people about them.</li>
      <li>Don’t give up. There are always people who need these products, and my goal is to share Isagenix with as many people
        as possible, even if they don’t want to be business builders.</li>
    </ul>
    <h3>Jennifer-Anne's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>Cleanse for Life®</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getJoeMSuccessStory(): string {
    return `<h3>Family Man Proves Isagenix is Not a Fad Diet</h3>
    <p>
      Joe had everything going for him: a wonderful wife, two adoring twin girls, and a thriving business. But, at 278 pounds,
      45-year-old Joe was so overwhelmed by his size, which had prevented him from fully enjoying life.
    </p>
    <p>
      “When my wife and I got together, we lived by the motto that we were going to make life happen. That held true for almost
      every aspect of my life except when it came to my health. I had come to the realization that I had simply let life
      happen," shares Joe.
    </p>
    <p>
      His “a-ha" moment came while watching his 47-year-old physically fit wife compete in her first-ever fitness competition
      after using Isagenix®.
    </p>
    <p>
      In that moment, he realized it was time for his own transformation; he knew he could be in the best shape of his life with
      the IsaBody Challenge® and the 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      He was right. By the end of Joe’s IsaBody Challenge journey, he had released 51 pounds, said goodbye to 39 inches overall,
      and added 16 pounds of lean muscle mass.*
    </p>
    <p>
      His incredible transformation also won him a spot in the 2013 Top 6 IsaBody Challenge Celebration judging.
    </p>
    <p>
      But for Joe, this milestone was the first of many more to come. He entered the IsaBody Challenge for a second time with the
      goal of taking his fitness to another level and increasing his lean muscle mass.
    </p>
    <p>
      And, while he doesn’t know what he will do next, he looks forward to using his transformation to inspire others and build
      his Isagenix business with his wife.
    </p>
    <h3>Joe’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>If you are serious about weight loss and adding lean muscle mass you might as well be as efficient as possible. This
        means using all the Isagenix products as they have a synergistic effect.</li>
      <li>Use the Isagenix Brain and Sleep Support system to ensure that you consistently experience quality sleep. Quality
        sleep has a significant impact on everything including focus, cravings, will power, etc.</li>
      <li>Use interval training like CrossFit to burn more calories. Variety is critical to ensure that your body is constantly
        challenged and that you don’t get bored.</li>
      <li>Make sure you broadcast your goals to family, friends and co-workers for accountability.</li>
    </ul>
    <h3>Joe’s Key Products for Feeling More Youthful:</h3>
    <ul>
      <li>French Vanilla IsaLean® Pro with Amped Hydrate®</li>
      <li>Ageless Essentials™ with Product B™</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Sleep Support and Renewal™</li>
    </ul>`;
  }

  private getKellyAnnZSuccessStory(): string {
    return `<h3>IsaBody Winner Takes Flight With New Physique Gaining $25,000**</h3>
    <p>
      At 40, Kelly Ann Z. was an avid athlete with two kids under three when her weight hit 185 pounds.
    </p>
    <p>
      While she never considered herself "big," the last time Kelly recalls being a "normal" weight was around seven years old.
    </p>
    <p>
      For the past 25 years, she’s jumped from diet to diet. Her job as a flight attendant made eating a balanced meal difficult.
      Often she found herself eating convenient but unhealthy meals in between flights. As a result, Kelly Ann became more
      and more lethargic.
    </p>
    <p>
      "I wanted to recapture who I used to be and the energy I used to have," shares the Toronto resident.
    </p>
    <p>
      Introduced to Isagenix® by her friend, Tina G., Kelly Ann was excited about the products and the convenience, which made
      them seem ideal for her on-the-go lifestyle.
    </p>
    <p>
      But, before committing to her first 30-Day Cleansing and Fat Burning System, she wanted to better understand the science
      behind the products, so she did a little research before ordering the Pacesetter Pak.
    </p>
    <p>
      "Like any new user, I was still a bit skeptical," shares Kelly Ann. "But, I would know within 30 days if this system was
      right for me."
    </p>
    <p>
      Only this time, she decided to take a different approach to her weight-loss journey. She chose to focus on the nutrition
      and forgo the gym for her first 30 days.
    </p>
    <p>
      "I lost more than 20 pounds* by doing that," laughs Kelly Ann. "I was so excited, I did it again!"
    </p>
    <p>
      By her third 30-Day System, Kelly Ann had so much energy she had to go to the gym. That’s also when she decided to join the
      IsaBody Challenge® and completed two back-to-back Challenges.
    </p>
    <p>
      Thanks to her relentless commitment, this now toned athlete went from a size 16/18 to a size two,* a size she never thought
      was possible.
    </p>
    <p>
      "I am no longer hiding, adds this 2013 IsaBody Challenge Grand Prize Winner. "Thanks to Isagenix, I am living out loud!"
    </p>
    <p>
      Sporting a sleek new physique, Kelly Ann started sharing her success with those around her, which in turn, has helped ignite
      her Isagenix business.
    </p>
    <p>
      Not only has this Challenge winner transformed her health, but she’s now transforming her wealth and will enjoy a paid IsaBody
      Challenge® Transformation Cruise.
    </p>
    <p>
      In addition to the cash and prizes received from her IsaBody Challenge Kelly Ann has earned an extra $1,000** a month since
      May 2012. Sharing her experiences and her Challenge story has kick-started her Isagenix business and significantly
      added to her residual income.
    </p>
    <p>
      "This business is not your typical 9-to-5 job where you’re not supported by the people around you," shares Kelly Ann. "With
      Isagenix everyone is rooting for your success. You’re supported by your teammates, the people above you and the Corporate
      Executive Leaders."
    </p>
    <p>
      To keep momentum, Kelly Ann keeps what Isagenix Millionaire, 18-Star Platinum and 6-Star Crystal Executive Jimmy S. front
      of mind, which is "never give up."
    </p>
    <p>
      "That advice, plus the results from my Challenge and the many tools available to me, keep me moving forward," shares Kelly
      Ann. "My goal is to join the ranks of Isagenix Millionaire, 13-Star Platinum and 10-Crystal Executive Lynn H.; Isagenix
      Millionaire, 8-Star Platinum and 11-Star Crystal Executive Lisa D.; and Isagenix Millionaire, 14-Star Platinum and
      12-Star Crystal Executive Susan S. They’re incredible women, incredible mentors and incredible business builders,"
      she says.
    </p>
    <h3>Kelly Ann’s Tips for Success</h3>
    <ul>
      <li>Follow the system. If you’re struggling, reach out to your support team for tips to stay on track. Don’t ever give
        up.</li>
      <li>Know your "why" and focus on all you’ll be gaining.</li>
      <li>Focus on nutrition! It’s 80 percent of the battle. Let Isagenix do the work it was created to do.
        <li>Be prepared! Always have an Isagenix snack on hand.</li>
    </ul>
    <h3>Kelly Ann’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Natural Chocolate IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getMikeTSuccessStory(): string {
    return `<h3>How Isagenix Helped This Utah Man Become Half His Size</h3>
    <p>
      Mike never thought the day would come when the fitness pros at the local gym would pat him on the back and thank him for
      being an inspiration.
    </p>
    <p>
      "When I first started working out I could barely walk from my car to the gym without getting winded," shares Mike, now
      a proud member of the 200-Pound Club. "I weighed 505 pounds and was facing serious health problems."
    </p>
    <p>
      But, thanks to the persistence of a friend, Mike attended an Isagenix® Launch Party and was immediately hooked on the nutritional
      benefits of the products and the like-minded people who attended.
    </p>
    <p>
      In fact, Mike met the one man who would help transform his life: Gary.
    </p>
    <p>
      After befriending Gary, a soon-to-be-certified fitness trainer, the two agreed to work together to help Mike achieve his
      320-pound weight-loss goal.
    </p>
    <p>
      While his target weight of 195 pounds may have seemed a bit far fetched at the time, this 6’1 former Biggest Loser reject
      has since dropped more than 200 pounds* and 20 pant sizes* using the 30-Day Cleansing and Fat Burning System.
    </p>
    <h3>A Walk to Remember</h3>
    <p>
      "Today, I walk on the treadmill at a level 15 incline for 45 minutes," shares the 2013 IsaBody Challenge Celebration Weight-Loss
      Solution Category Winner.
    </p>
    <p>
      With less than 100 pounds to go until he achieves his ultimate weight-loss goal of 195 pounds, Mike is also one step closer
      to achieving a prestigious Isagenix goal: becoming a newly inducted 300-Pound Club member.
    </p>
    <p>
      A youth counselor by trade, Mike is fortunate enough to have a career that allows him to work out four to six days a week
      for three to five hours at a time.
    </p>
    <p>
      "I have a new life," says Mike. "I wear a size 46 waist*…the last time I had a 46-inch waist was in high school!"
    </p>
    <h3>The Start of a New Chapter</h3>
    <p>
      So, what’s next?
    </p>
    <p>
      Aside from unveiling his even thinner physique at 2014 "Together We Will" New Year Kick Off, Mike wants to get his Isagenix
      business going, achieve financial freedom and retire within the next few years.
    </p>
    <p>
      Since starting his business in July 2012, Mike has actively shared Isagenix with others who also want to lose weight while
      still working full time.
    </p>
    <p>
      He understands that with patience, persistence and time, his business will eventually take off. For now, he plans to lead
      by example and continue to plant seeds in the minds of those he meets.
    </p>
    <p>
      In the interim, Mike is educating himself on the new tools Isagenix develops and knows the company is there to help him achieve
      all of his goals.
    </p>
    <h3>Mike’s Tips for Success</h3>
    <ul>
      <li>Love people.</li>
      <li>Trust and believe in yourself.</li>
      <li>Be patient.</li>
      <li>Be persistent.</li>
    </ul>
    <h3>Mike’s Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>IsaDelight Plus™</li>
    </ul>`;
  }

  private getNilsMSuccessStory(): string {
    return `<h3>A Story of Hope: Father Overcomes Tragedy and Regains Health</h3>
    <p>
      When Nils M. and his wife, Elizabeth, lost their six-year-old daughter to cancer, they were broken. They both put their own
      health aside to make their daughter a top priority.
    </p>
    <p>
      "My body was out of shape, my mind was numb," says Nils. "I had no desire to pursue any fitness or exercise program which
      years before had always been at the center of my life."
    </p>
    <h3>The First Steps to Redemption</h3>
    <p>
      Nils’ first steps to success were through his wife, Elizabeth, who was competing in the IsaBody Challenge® in 2012. Nils
      was so inspired by his wife’s total mind and body transformation, he decided to join her for her workouts. The first
      steps were not easy, but Nils was determined to see his own commitment through.
    </p>
    <p>
      "When my wife invited me to join her to work out with her CrossFit coach during her IsaBody Challenge, I had not set foot
      inside a gym since 2006," says Nils. "During our first session, I literally did one box jump and two burpees. And
      that was more than plenty."
    </p>
    <p>
      Slowly, Nils chipped away at each day to bring both his mindset and his body to the next level. Like Elizabeth, Nils used
      a variety of Isagenix products to kick-start his new health and he couldn’t believe the difference in energy and
      focus both during workouts and throughout the day. Eventually, Nils decided to follow in his wife’s footsteps by
      registering for the 2013 IsaBody Challenge.
    </p>
    <h3>A Challenge Within a Challenge</h3>
    <p>
      When Nils started his IsaBody Challenge, he became sick in his first month. "It was one of those moments I knew that even
      with very limited time, Isagenix still gave me the products to be what I wanted to be if I was willing to put in
      the time and effort," shares Nils. Since his job requires him to travel, fitting in a good workout was sometimes
      difficult, but Nils always managed to make it work, even on days where most of his time was spent on an airplane.
      Nils says, "The difference between being average and excelling and exceeding, is that you must be willing to put
      in the effort."
    </p>
    <p>
      For Nils it was never a matter of completing the challenge, it was a matter of exceeding the base of doing average. "Quitting
      after a 15-hour day or finding an excuse to say I’m too tired was not an option," he says. The Challenge was done
      in only 90 days. "Part of what I wanted my Isagenix story to be was a story of hope. I wanted to be transparent enough
      for people to realize even in the middle of adversity there still is hope, a goal and a finish line."
    </p>
    <h3>Nils’ Tips for Success</h3>
    <ul>
      <li>Find a reason, a purpose to start.</li>
      <li>Commit to your goal completely; no excuses.</li>
      <li>Quitting is not an option. Doing does what wishing won’t!</li>
    </ul>
    <h3>Nils’ Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro (Chocolate) with IsaFruits® and Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
      <li>Chocolate Peanut Crunch IsaLean Bar</li>
    </ul>`;
  }

  private getDrPaulBSuccessStory(): string {
    return `<h3>One Man’s Mission to Get Six-Pack Abs Without the Cardio</h3>
    <p>
      Dr. Paul is the father of three young children and the owner of two chiropractic offices. Before trying Isagenix, he appeared
      to be in good shape on the outside, but secretly, he was struggling with low energy and sleepless nights.
    </p>
    <p>
      As a result, life’s everyday stresses began mounting and Dr. Paul found himself looking for comfort in all the wrong places.
    </p>
    <p>
      "I was eating at fast food restaurants a lot," shares Dr. Paul. "Prior to having kids, I was in great shape, but between
      work and life I was starting to pack on a few pounds."
    </p>
    <p>
      That’s when Dr. Paul decided he was ready for a change and discovered Isagenix®.
    </p>
    <h3>Food for Thought</h3>
    <p>
      Interestingly enough, Dr. Paul also creates high-performance, nutritional meal plans for elite athletes. As he began reading
      the labels of the 30-Day Cleansing and Fat Burning System, he became increasingly impressed by its ingredients. More
      importantly, he was blown away when he realized the nutrients were complete enough to help him achieve six-pack abs
      if he simply weight trained and fueled his body with the system.
    </p>
    <p>
      Putting his idea into motion, he added an extra level of accountability by sharing his lofty goal with everyone he knew.
      He would focus on weights and skip the cardio. Now, he just had to prove it.
    </p>
    <p>
      So, he created a schedule that allowed him to go to the gym a minimum of three times a week while leaving ample time for
      his kids.
    </p>
    <p>
      At the end of Dr. Paul’s 16-week Challenge, he had lost 32 pounds,* went from 24 percent body fat to nine percent* and put
      on 15 percent lean muscle mass.* He also unveiled his newly chiseled washboard abs.
    </p>
    <p>
      "It’s all in the nutrients," adds the 41-year-old father. "You need world-class nutrition to get world-class results."
    </p>
    <h3>Best of Both Worlds</h3>
    <p>
      In addition to being in the best shape of his life, Dr. Paul’s transformation helped to launch his Isagenix business, which
      he is pursuing with his wife Dr. Renata.
    </p>
    <p>
      "When people see a change in you, they automatically want to do it," shares Dr. Paul.
    </p>
    <p>
      The key, he said, was belief in the products.
    </p>
    <p>
      Since January 2013, this 1-Star Golden Circle couple has focused on transforming as many lives as possible by sharing Isagenix
      and its products.
    </p>
    <p>
      "Thanks to Isagenix®, our income potential is limitless," adds Dr. Paul. "Isagenix is my future. My goal now is to expand
      the nutritional benefits to pro athletes everywhere!"
    </p>
    <h3>Dr. Paul’s Tips for Success</h3>
    <ul>
      <li>
        <strong>Plug In.</strong> It’s simple, just plug yourself in to all the support Isagenix has to offers from seminars, to
        events, to live weekly calls, and the vast amount of information that is found throughout the Isagenix websites.
        It’s all there for you to become extremely successful, just plug yourself in!</li>
      <li>
        <strong>Speak from Experience.</strong> There is nothing more powerful than speaking from personal experience. Once Isagenix
        has changed your life in a positive way, people will want to follow you.</li>
      <li>
        <strong>Partner Up!</strong> Although many people have built extremely successful Isagenix businesses on their own, it’s
        amazing to have your significant other involved. "I’m very fortunate to be working with my wife," says Dr. Paul.</li>
    </ul>
    <h3>Dr. Paul’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaPro®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getRichardBSuccessStory(): string {
    return `<h3>Retired CEO Finds Strength in Isagenix</h3>
    <p>
      Retirement had been good to Richard. Not only did he buy a farm on the outskirts of Toronto Ontario, but he had finally been
      able to focus on his health.
    </p>
    <p>
      Prior to having time freedom, Richard was the president of a subsidiary for an international steel company with a nonstop
      schedule. The result? His health concerns were always pushed to the side.
    </p>
    <p>
      It wasn’t until a good friend told Richard about Isagenix® in 2006 that he even considered his health or eating right.
    </p>
    <p>
      "She looked fabulous," shares Richard. "And, she was a very credible gal."
    </p>
    <p>
      He admits he was a bit skeptical in the beginning, but opted to order the 9-Day Deep Cleansing and Fat Burning System anyway.
      He rationalized his decision by telling himself that if the system didn’t work, he only committed to nine days.
    </p>
    <p>
      "Within weeks I had lost 31 pounds,"* shares Richard incredulously. "I couldn’t believe it."
    </p>
    <p>
      After maintaining his weight loss for six years, Richard decided to join the 2013 IsaBody Challenge® and be a role model
      for Baby Boomers, proving you can change the direction of your health if you choose to.
    </p>
    <p>
      By the time Richard submitted his final stats for the Challenge, he was a fit 181.5 pounds* and in the best shape of his
      life. He even returned to martial arts after a long hiatus and now has the opportunity to travel the world participating
      in international martial arts events.
    </p>
    <p>
      "The Isagenix products continue to amaze me,” says Richard.
    </p>
    <h3>Richard’s Tips for Success</h3>
    <ul>
      <li>Drink half your body weight in ounces of water per day.</li>
      <li>Start off working out slowly, especially if you haven’t worked out in days, months or even years.</li>
      <li>Coordinate your Isagenix products so they align with your workouts.</li>
      <li>Have a progressive goal. Do what you can each day and the next day do a little more.</li>
    </ul>
    <h3>Richard’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Cleanse for Life®</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
    </ul>`;
  }

  private getRichardRSuccessStory(): string {
    return `<h3>Physical Therapist Finally Fits Into His Life</h3>
    <p>
      Before May 2012, Richard had no idea what it felt like to "be in shape." He had been overweight his whole life.
    </p>
    <p>
      "I reached 200 pounds by the time I was 12 years old; 250 pounds by my sophomore year in high school, and 300 pounds by graduation,"
      shares the first-ever IsaBody Challenge® Weight-Loss Solution Winner and newly crowned 100-Pound Club member. "I’ve
      stayed above 300 pounds ever since."
    </p>
    <p>
      That was until last summer when he stepped on the scale and weighed a staggering 410 pounds for the first time in his life.
    </p>
    <p>
      "Words cannot describe the feeling that came over me when I saw a ‘four’ in front of my weight," says Richard, who is also
      a physical therapist. "It was an eye opener."
    </p>
    <p>
      Intent on losing weight, Richard ordered the 30-Day Cleansing and Fat Burning System and agreed to follow the same formula
      for success his fitness-competitor wife uses to stay in peak performance.
    </p>
    <p>
      When the package arrived, he found himself reading more about the Challenge and relating to the stories of former Challenge
      winners Jill B. and Craig C. Their success gave Richard the push he needed to sign up.
    </p>
    <p>
      Fueled by inspiration, Richard lost 21 pounds,* then he was down 39 pounds;* then more than 100 pounds* overall.
    </p>
    <p>
      His inspirational transformation earned him $1,000 cash and the chance for he and his wife to join the Top 3 New Year Kick
      Off Challenge Finalists on a tropical cruise, plus it also encouraged many of his friends to take control of their
      health, too.
    </p>
    <p>
      As an added bonus since completing the Challenge, Richard has jump-started his Isagenix business and is excited to create
      an extra stream of income.
    </p>
    <p>
      Now, aside from growing his business, Richard plans on fulfilling his life-long dream of becoming a bodybuilder.
    </p>
    <h3>Richard’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Don’t just do cardio to burn calories, add resistance training to your workouts—you will lose weight faster and have
        an easier time keeping it off. Remember increased muscle mass = increased metabolic rate. Females often worry about
        getting too "bulky,” that’s not going to happen!</li>
      <li>Set small, attainable goals. It’s good to have a long-term goal, but remember body composition is going to change,
        so is the ideal weight that you have in mind.</li>
      <li>Find someone to do the program with and join the IsaBody Challenge. Anything to hold you accountable.</li>
      <li>Get a scale to weigh your foods. It’s a great way to make sure you are not eating too much and ensure you are not
        depriving yourself of important calories—some foods are very deceiving!</li>
    </ul>
    <h3>Richard’s Can Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Natural Accelerator™</li>
      <li>Chocolate Decadence IsaLean® Bar</li>
    </ul>`;
  }

  private getShannonKSuccessStory(): string {
    return `<h3>Single Mom Goes From Overweight to Athlete</h3>
    <p>
      Five years ago, when Shannon was six months pregnant with her youngest child, and her oldest was only 18 months old, Shannon’s
      husband suddenly left their marriage. As a new single parent, Shannon struggled to find the balance between being
      a great parent, and looking after her own health. Embarrassed, Shannon let the weight pile on.
    </p>
    <p>
      At 286 pounds, Shannon was no longer able to keep up with her two kids. This brave single mother of two realized her daughters
      needed a mother who was healthy in both mind and body. With Isagenix and the IsaBody Challenge®, Shannon started
      her journey to become just that.
    </p>
    <p>
      "I never thought I would be called an athlete," said the mother of two. Now, Shannon is a member of the Isagenix 100-Pound
      Club, an active runner and swimmer. But more than anything else, Shannon is an excellent role model for her two daughters,
      and an inspiration to single mothers everywhere.
    </p>
    <h3>Shannon’s Motivation</h3>
    <p>
      A friend of Shannon’s introduced her to Isagenix, but it wasn’t until she met the 2012 IsaBody Champion, Craig C., that Shannon
      started her Isagenix journey. Craig became Shannon’s accountability partner and source of fitness motivation. Craig,
      and his sponsors, inspired her throughout her journey. However the reason Shannon truly decided to make a major lifestyle
      change was for her kids. Shannon’s children, her ‘why’, are what ignited her weight-loss journey.
    </p>
    <p>
      "One of my favorite parts is helping others find their ‘why’ and guiding them through their own successful journey," shares
      Shannon. "It is my true passion, as I believe that anyone can do it!"
    </p>
    <h3>What’s Next?</h3>
    <p>
      Now, Shannon is more present for her children and family than ever. After realizing that she deserved to be healthy and that
      loving herself was the best gift she could give her children, her family is now built around the core value that
      healthy is a lifestyle. Shannon, who originally started out as a product user, says, "I can’t help but move forward
      with the business aspect of Isagenix. I want to share the products and my story with the world. I believe that Isagenix
      has the answer to whatever your goal is. Isagenix changed my life, and my family’s, forever."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Start out slowly and ease into it. Don’t try to do everything at once right off the bat. Focus on what you have done
        and can do, rather than on what you still can’t do.</li>
      <li>Plan your meals and exercise schedule for the week in advance. "Fail to plan….Plan to fail."</li>
      <li>Get connected. Surround yourself with as many accountability/ support partners as you can. Get connected with others
        on the same journey!</li>
    </ul>
    <h3>Shannon's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro Vanilla Shake</li>
      <li>IsaFruits® and Isagenix Greens!™</li>
    </ul>`;
  }
}
