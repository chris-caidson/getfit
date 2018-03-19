import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2014Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "abby-g": htmlString = this.getAbbyGSuccessStory(); break;
      case "amyra-m": htmlString = this.getAmyraMSuccessStory(); break;
      case "angie-r": htmlString = this.getAngieRSuccessStory(); break;
      case "ben-m": htmlString = this.getBenMSuccessStory(); break;
      case "bob-s": htmlString = this.getBobSSuccessStory(); break;
      case "david-j": htmlString = this.getDavidJSuccessStory(); break;
      case "elizabeth-b": htmlString = this.getElizabethBSuccessStory(); break;
      case "erin-p": htmlString = this.getErinPSuccessStory(); break;
      case "jason-o": htmlString = this.getJasonOSuccessStory(); break;
      case "jennifer-r": htmlString = this.getJenniferRSuccessStory(); break;
      case "judy-l": htmlString = this.getJudyLSuccessStory(); break;
      case "randy-f": htmlString = this.getRandyFSuccessStory(); break;
      case "shelagh-r": htmlString = this.getShelaghRSuccessStory(); break;
      case "thai-l": htmlString = this.getThaiLSuccessStory(); break;
      case "will-a": htmlString = this.getWillASuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAbbyGSuccessStory(): string {
    return `
    <h3>The Speed of Purpose: From Couch Potato to IsaBody Finalist</h3>
    <p>
      One day after work, Abby was reprising her role as a self-proclaimed "couch potato” when she came to a sudden and startling
      revelation—life wasn’t getting any better. She was in her early 20s and her life had already settled into an unfulfilling
      and unhealthy routine.
    </p>
    <p>
      "Every day became a carbon copy of the one before it," says Abby. "I went to work, grazed the fridge and cabinets for hours
      on end eating unhealthy snacks, then I’d plop down on the couch and watch TV until I couldn’t keep my eyes open,"
      confesses Abby. "I had no motivation."
    </p>
    <p>
      Nothing could move her. "My boyfriend would try to get me to go on walks or ride bikes," Abby remembers, "but I just wasn’t
      interested."
    </p>
    <p>
      Her ‘aha moment’ came when she saw pictures of herself from a friend’s party. "I saw pictures of myself and I was appalled,"
      says Abby, "I realized it was time to make a change–things weren’t going to get any better–I didn’t even recognize
      myself."
    </p>
    <h3>Abby’s IsaBody Motivation</h3>
    <p>
      Abby started with Isagenix in March of 2013. "I started using the 30-Day Cleansing and Fat Burning System," she says, "I
      started to see pretty fast results, and considered joining the IsaBody Challenge®."
    </p>
    <p>
      "My trainer suggested we do the Challenge, so that is exactly what I did to hold myself accountable," remembers Abby, "I
      never in a million years expected to be a finalist! I just saw that I needed to change my lifestyle."
    </p>
    <h3>Abby’s New Normal</h3>
    <p>
      Today, Abby’s routine is very different. "These days, I get a lot of compliments," She shares confidently, "especially
      during the final weeks of the Challenge."
    </p>
    <p>
      Abby talks about some of her favorite Isagenix products. "I take e+™ before every workout. Isagenix fuels my energy. I feel
      more alive and am more motivated and I’m so excited to tell others about Isagenix. Then there’s Ionix®. I can’t
      go a day without it."
    </p>
    <p>
      Friends and family have really noticed a significant change in Abby’s physique. "I frequently hear, ‘Wow you’ve really lost
      a lot of weight’ and I must say that feels good."
    </p>
    <h3>A Challenge For The Future</h3>
    <p>
      Being an IsaBody Challenge Finalist has changed Abby’s life. "I plan to compete in many other IsaBody Challenges," states
      Abby. "I love the discipline and it helps me stay focused, lowers my body fat percentage and reach a higher level
      of fitness."
    </p>
    <p>
      Abby is driven. "I love to share my story with everyone I meet. My goal is to build a business and help people. Isagenix
      is the perfect way to build both."
    </p>
    <h3>Abby's Tipe for Weight-Loss Success and IsaBody Success</h3>
    <ul>
      <li>
        <strong>Focus on your goals.</strong> Whether you want to release pounds, gain lean muscle or improve your health at
        any age, IsaBody has a Challenge for you.</li>
      <li>
        <strong>Take the Challenge seriously.</strong> This Challenge is about transformation that moves you to make lasting
        changes for healthy longevity.</li>
      <li>
        <strong>Share!</strong> Discuss the IsaBody Challenge whenever possible, you’ll be surprised at how much it will motivate
        you.</li>
    </ul>
    <h3>Abby's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Pro</li>
      <li>e+™ Energy Shot</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getAmyraMSuccessStory(): string {
    return `
    <h3>Florida Fitness Instructor Gets Fit with Isagenix</h3>
    <p>
      "Life before the IsaBody Challenge® was frustrating," shares Amyra, a former Tampa Bay Buccaneers NFL Cheerleader and current
      group fitness instructor. "I was always active yet kept gaining weight. Then to be in front of a group, trying
      to help them get in shape and not being in shape myself, was exhausting and disappointing."
    </p>
    <p>
      Not to mention the not-so-exciting news she received from her doctor following her yearly physical.
    </p>
    <p>
      "The tremendous financial pressure my family was having, the stresses of motherhood, and the long hours my husband was working
      resulted in a lot of late-night snacking and me weighing 173 pounds," says Amyra.
    </p>
    <p>
      That’s when her good friend shared Isagenix.
    </p>
    <h3>Becoming Her Biggest Fan</h3>
    <p>
      "I immediately ordered the 9-Day Deep Cleansing and Fat Burning System and signed up for the IsaBody Challenge," she says.
    </p>
    <p>
      The first Challenge was all about transforming her physical appearance. The second was about transforming her life.
    </p>
    <p>
      "I lost 7 pounds* that first week," exclaims Amyra. "But it was at Celebration 2013 when I realized that this is more than
      just a physical transformation. I saw the financial opportunity available with Isagenix and gained a hope for the
      future."
    </p>
    <p>
      The desire to look her best, coupled with her drive to financially give back to her family, drove her to get up each morning
      and work out.
    </p>
    <p>
      Her success became apparent three months into her first Challenge when she slipped back into her pre-pregnancy jeans. Even
      more exciting for Amyra was purchasing her first pair of size 2/4 jeans less than one year after joining Isagenix,
      and after completing her second Challenge—a transformation slim down of six pant sizes.*
    </p>
    <h3>Creating Team Spirit</h3>
    <p>
      Today, this successful Crystal Executive is happier and healthier than she’s ever been. She’s also contributing between $300
      and $900** a month to her family’s household income!
    </p>
    <p>
      "Taking part in the Challenge has established more credibility and more authority in my business than I could ever articulate
      in a conversation," explains Amyra.
    </p>
    <p>
      Her personal and professional goals moving forward are to share the vision and build a team of like-minded people. She also
      wants to help families experience the same financial relief to ultimately live the life they desire.
    </p>
    <p>
      "I start by sharing the cost-saving benefits of the President’s Pak," laughs Amyra. "I spent so much money during my first
      month between ordering the 9-Day System, vitamins and snacks for my kids, and extra products for my husband to
      try. I wish someone would have told me sooner."
    </p>
    <p>
      So, what’s next for this IsaBody Challenge Top Achievers Finalist?
    </p>
    <p>
      "We [my team and I] are currently doing a 90-Day Game Plan," shares Amyra. "I have made a commitment to myself that while
      I continue to wake up everyday at 5 a.m. to work out in preparation for Celebration in August, I will work my business
      just as hard in hopes of achieving 3-Star Golden Circle by then!"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Engage in exercise.</strong> "Just drink the shake and earn your shower!” (Follow the program and engage in any
        exercise that you enjoy that makes you sweat.)</li>
      <li>
        <strong>Focus on today.</strong> Don’t focus on the end goal. It can be overwhelming. Focus on the day and celebrate
        your daily accomplishments. They will accumulate into the big goal achieved!</li>
      <li>
        <strong>Talk to others.</strong> Plug in to the IsaBody community. Take lots of pictures and share your journey. It will
        inspire others which will serve as motivation for you.</li>
      <li>
        <strong>Stay the course.</strong> No matter what, don’t quit!</li>
    </ul>
    <h3>Amyra's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>e+™</li>
      <li>Ionix® Supreme</li>
      <li>Whey Thins™</li>
    </ul>`;
  }

  private getAngieRSuccessStory(): string {
    return `
    <h3>Top Achiever Finalist Hopes to ‘Spread the Secret’</h3>
    <p>
      "Many times throughout my life I would turn to food for comfort," reflects Angie, a 2014 IsaBody Challenge® Top Achiever
      Finalist. "The more I ate, the more I gained. The more I gained, the more I tried to shed the weight. The more
      I failed, the more I ate. I was in a vicious cycle and was my own worst enemy."
    </p>
    <p>
      After 20 years of "trying every fad diet under the sun," Angie glanced at her family—the majority who were overweight—and
      chalked it up to genetics.
    </p>
    <p>
      "Let me put it this way: By that time, the only thing I hadn’t done was gastric bypass surgery," shares Angie who was 258
      pounds before being introduced to Isagenix in March 2013.
    </p>
    <h3>Proving a Point</h3>
    <p>
      Angie’s friend, Stephanie, gave her the 30-Day Cleansing and Fat Burning System to prove that Angie could lose the unwanted
      weight with the right tools.
    </p>
    <p>
      Wanting to equally prove to her friend that Isagenix was another "fad diet," Angie was actually pleasantly surprised. The
      products not only worked, but Angie enjoyed the overall simplicity of the system.
    </p>
    <p>
      "Stephanie definitely got me," laughs Angie. "I’m so happy she was right and I was wrong."
    </p>
    <p>
      Since then, Angie went through an outstanding transformation losing 140 pounds.* Her incredible results inspired her father
      to join Isagenix and embark on a similar weight-loss journey. Together, the daughter and father each lost more
      than 100 pounds,* and entered the prestigious 100-Pound Club together.
    </p>
    <h3>Bring It On</h3>
    <p>
      Angie’s a pro at bringing dreams to life. She dreamt of finding the "Angie within" and accomplished that after being asked
      to join the IsaBody Challenge by an Isagenix employee, Ashley, who was inspired by her transformation when she
      lost her first 100 pounds.*
    </p>
    <p>
      Since joining the IsaBody Challenge, the Arizona native lost 28 more pounds and succeeded her goal of reaching her high school
      weight of 125 pounds. Now, Angie’s a happy and healthy 118 pounds, and ready to compete for the title of 2014 IsaBody
      Challenge Grand Prize Winner.*
    </p>
    <p>
      "I think everybody should continuously be in the IsaBody Challenge," expresses Angie. "Because whatever goal you’re trying
      to reach, if you have a tool such as the IsaBody Challenge to hold yourself accountable, no one else can hold you
      accountable except you—it’s your choice."
    </p>
    <p>
      With losing a total of 26 sizes* since joining Isagenix, Angie believes it’s not about the size of your pants that makes
      you a winner—it’s how you feel inside.
    </p>
    <p>
      "I feel fantastic. I look a lot better. I’m years younger. And I’m able to run and play with my children for the first time
      in their whole lives," says Angie, a mother of three. "With this newfound energy, the greatest prize of all is
      that I won my life back."
    </p>
    <h3>Sharing the ‘Secret’</h3>
    <p>
      Now on a daily regime of using the 30-Day System, the 1-Star Golden Circle, Crystal Director has another dream to make a
      reality: inspiring others through her journey of overcoming self-doubt while achieving their peak of wellness.
    </p>
    <p>
      As a Top Achiever Finalist, Angie’s been awarded $3,000 cash, a trip for herself and a guest to 2014 Top Achievers, 2014
      Celebration and a spot aboard the 2014 IsaBody Challenge Transformation Cruise.***
    </p>
    <p>
      "I am definitely associated with Isagenix to help everyone that I can," says Angie. "I mean, I want to shout to the world:
      ‘I found the secret, everybody! Come here; I can help you.’"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Hold yourself accountable.</strong> That way, you don’t blame a friend or spouse or whomever for your actions.
        You have to answer to yourself.</li>
      <li>
        <strong>Join multiple Challenges.</strong> Whatever goal you’re trying to reach, if you have a tool such as the IsaBody
        Challenge, it keeps making you better and stronger.</li>
      <li>
        <strong>Work straight from the heart.</strong> Find a workout that moves you, put your heart into it, and visualize that
        goal from your heart.</li>
      <li>
        <strong>Everything happens for a reason.</strong> We all find ourselves using Isagenix through some personal journey.
        Just know that no matter what happens, it’s there for a reason and use that to empower your goal.</li>
    </ul>
    <h3>Angie's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Shakes</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getBenMSuccessStory(): string {
    return `
    <h3>Wrestling With An Unhealthy Life</h3>
    <p>
      Collegiate Certified Athletic Trainer coach Ben M. dedicated his life to encouraging the fitness and performance of others.
      But when it came to his own health, he couldn’t quite pin a healthy lifestyle down. "I was obese," recalls Ben.
      "I hold a master’s degree in health and human performance, but I couldn’t take my own health seriously."
    </p>
    <p>
      Ben recalls his earlier years. "I’ve always been an active guy but never a fit guy." He continues, "I was always tired
      and kept sleeping heavily. My hands and feet were always swollen." Ben had a sobering revelation. "I was just
      15 years younger than my dad when he died of a heart attack."
    </p>
    <h3>Tapping Out Early</h3>
    <p>
      Ben confesses he "was tired all the time," especially after the birth of his second daughter. His health continued to deteriorate.
      "I had just returned from a national athletic training convention, and I had health testing done. My biometric
      numbers were out of control, and in the second year, my numbers were even worse."
    </p>
    <p>
      With his health in decline, Ben noticed other disturbing developments. "I was falling asleep every night by 7 p.m. My health
      just wasn’t where I wanted it to be." Ben reached a crucial decision. "If I was going to make a change, it was
      now or never."
    </p>
    <h3>A Nutritional Rematch</h3>
    <p>
      Ben needed help. "I met with, Tryg and Tracy, my athletic trainers from college," he remembers. "Two people I’ve always
      looked up to and respected. They’re always looking good, always into fitness. They suggested Isagenix." It was
      then that Ben decided to take the first step. "I decided to sign up and join Isagenix that night."
    </p>
    <p>
      Ben can hardly contain his passion for the IsaBody Challenge® and committing gave him a whole new perspective. "It got me
      up off the couch and helped me get my health back on track," he says. "It’s awesome!"
    </p>
    <p>
      Ben’s sky-high confidence and impressive results are winning hearts, minds and bodies to Isagenix. "My confidence and my
      results are an inspiration to others, and that," he confides, "feels really good."
    </p>
    <h3>Tackling Healthy New Goals</h3>
    <p>
      Ben is training for the Oklahoma City Memorial Marathon–and that’s just the beginning. "I’m also in the hunt for six-pack
      abs by summer," he shares. "Training is going great—I’m not going to stop until I get them."
    </p>
    <p>
      "I loved getting the IsaBody call," Ben recalls. "Becoming a finalist really motivated me. I’m getting better all the time.
      I’m aiming for 5 percent body fat; I want to look like a sprinter."
    </p>
    <p>
      "My diet has never been this energy-packed," Ben insists. "Nowadays, I can’t wait to work out, and Isagenix is always there
      for me."
    </p>
    <h3>Ben's Tips for Success</h3>
    <ul>
      <li>
        <strong>Commit.</strong> Releasing unwanted pounds takes determination, focus and the right nutrition. No matter what
        your IsaBody™ goals, take them seriously.</li>
      <li>
        <strong>Stay focused.</strong> Don’t let anything distract you and prevent you from achieving what you want.</li>
      <li>
        <strong>Take command.</strong> The Challenge puts you in control. It’s your ship–you’re the Captain. Set a course for
        success and set sail.</li>
      <li>
        <strong>Don’t be shy.</strong> Discuss the IsaBody Challenge with everyone you meet. The energy and words that come from
        you will be motivational – and infectious!</li>
    </ul>
    <h3>Ben's Favorite Products</h3>
    <ul>
      <li>IsaLean® Bar (Chocolate Cream Crisp)</li>
      <li>IsaLean® Pro (Natural Vanilla)</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getBobSSuccessStory(): string {
    return `
    <h3>Top Achievers Finalist and Seasoned Network Marketer Reignites Business</h3>
    <p>
      Before Bob joined the IsaBody Challenge® he had been a business builder for nearly five years, using the Challenge as his
      key enrollment tool.
    </p>
    <p>
      When he was not actively building his business with his wife, Andreja, the two were running their family-owned fine dining
      European restaurant in British Columbia.
    </p>
    <p>
      "We work on average 12 to 16 hours a day, so when we came across Isagenix in April 2009, it was a complete blessing in disguise,"
      shares Bob.
    </p>
    <p>
      They were enjoying some much needed down time on the beach in Mexico when they met Isagenix Millionaires, 16-Star Platinum,
      20-Star Crystal Executives Herb and Patty C.
    </p>
    <p>
      "We found something in Patty and Herb that we didn’t even know we were looking for that day," recalls Bob.
    </p>
    <h3>Pushing the Envelope</h3>
    <p>
      The next day, they enrolled with Isagenix.
    </p>
    <p>
      Over the next few years, Bob and his wife became faithful product users, slowly building their business. Everything was good,
      but Bob knew it could be better. He knew if he really wanted to ignite his business, he had to lead by example.
      That’s when he joined the Challenge.
    </p>
    <p>
      He also wanted to put to rest some lurking misconceptions about Isagenix being a fad diet in his area.
    </p>
    <p>
      "My goal was to be one of the first contestants to actually put on weight and to also prove that this system was not a ‘diet,’
      but a true heath and wellness program that will do what you desire."
    </p>
    <p>
      To start his journey, he ordered the Performance President’s Pak. He also carved out one hour a day for the gym—a place Bob
      rarely went despite being fairly fit.
    </p>
    <h3>Building on Momentum</h3>
    <p>
      After a few weeks of combining the products with regular exercise, Bob’s body started to lean out. His results inspired his
      trainer and a few gym goers to also try the products, which also helped to organically grow his business.
    </p>
    <p>
      For Bob, his journey was never about weight loss but instead about weight gain. His motto was simple: Focus on the process
      and results will come.
    </p>
    <p>
      "My motivation came each time I saw the amount of weights I was lifting increase," excites this 2014 Top Achievers Finalist.
      "That was proof I was succeeding."
    </p>
    <p>
      In addition to packing on more muscle, another element of Bob’s journey was to inspire others to get healthier.
    </p>
    <p>
      By the end of Bob’s Challenge he had done both: he had gained 8 pounds* and was sporting washboard abs all while igniting
      his business.
    </p>
    <p>
      Currently a 5-Star Golden Circle and 4-Star Crystal Executive earning between $280,000 and $417,000 a year,** Bob now speaks
      with confidence when sharing the benefits of the Challenge with others.
    </p>
    <p>
      "Isagenix has also helped bring out the teamwork between my wife and me," adds Bob. "Running a successful restaurant sometime
      means you’re running in opposite directions to get everything done."
    </p>
    <p>
      Now, Bob and his wife are encouraging everyone on their team to join the Challenge.
    </p>
    <p>
      "Part of this journey is about discovering a new you," shares Bob. "I love this Challenge for giving me the drive and accountability
      to keep motivated."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Give yourself a break.</strong> Don’t make it so regimented that you set yourself up for failure.</li>
      <li>
        <strong>Have an accountability partner.</strong> Ask either someone in the IsaBody Challenge or a trainer to help you
        stick with the program.</li>
      <li>
        <strong>Create a motto.</strong> Mine is "Focus on the process and results will come!”</li>
      <li>
        <strong>Have fun!</strong> Approach each day with enthusiasm. People will start to want what you have—this is a business
        building tool when used right.</li>
    </ul>
    <h3>Bob's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>e+™</li>
      <li>IsaLean® Bars</li>
    </ul>`;
  }

  private getDavidJSuccessStory(): string {
    return `
    <h3>From Wake-Up Call to Weight-Loss Success</h3>
    <p>
      Ask David about life before the IsaBody Challenge®, and he sums it up in one word: unhealthy. "I was eating lots of frozen
      and processed foods," he says. "As I entered my 40s, my health started deteriorating rapidly – high blood pressure,
      a bulging (spinal) disc, sleep apnea – you name it."
    </p>
    <p>
      David, a veteran financial planner from Dubuque, Iowa, recalls a deteriorating state. "My health was unraveling. I was overweight
      and eating unhealthy. Even worse," he confides, "a good friend had passed away who had a lot of similar health
      challenges. He was my age."
    </p>
    <p>
      "I had to either accept dying soon," shares David, "or get off my butt and do something about it." He began to set priorities.
      "You don’t appreciate good health until it’s gone. I was in pain, feeling bad and very unhealthy. It was time for
      a change."
    </p>
    <h3>A Sound Investment in Health</h3>
    <p>
      Determined to reach his goals, David searched for an answer. "I knew I needed help to release excess weight, but I didn’t
      know where to turn," he remembers. David wanted to avoid a medicine cabinet filled with prescription drugs, so
      he decided to do some research to look for a healthier alternative. Shortly after, his doctor asked him if he was
      interested in attending a nutritional seminar.
    </p>
    <p>
      That seminar was an Isagenix presentation. "I went, and I was so impressed, I signed up right away. I trusted my enrolling
      sponsor, so I trusted Isagenix. I just had to try it."
    </p>
    <p>
      For David, the systems were easy to follow. "I followed [them] and watched the weight melt off. In the mirror, I saw the
      fit young man I was in high school returning. It was really exciting."
    </p>
    <h3>IsaBody Closes The Deal</h3>
    <p>
      Soon after joining Isagenix, David signed up for the IsaBody Challenge to hold himself accountable and he has never looked
      back. The IsaBody Challenge gave him inspiration to compete with others. "Since high school football, competition
      has always motivated me," David says. "I was hooked."
    </p>
    <p>
      "I didn’t know what the magic number should be," he adds referring to weight watching, "but I knew I wanted to start feeling
      healthy and fit."
    </p>
    <h3>A Brighter Future</h3>
    <p>
      Ask David today about his life, and his enthusiasm is infectious. "Oh my gosh, everything’s changed!" he says zealously.
      David hoped to lose weight, but he didn’t expect such drastic results in so many arenas. His health, his cardio
      and his physical strength are back.
    </p>
    <p>
      David beams, "Recently, I have met the woman of my dreams. I’ve surrounded myself with positive and empowering people, and
      my life and health now seem to be in balance. I have hope again."
    </p>
    <h3>David's Tips for Success</h3>
    <ul>
      <li>
        <strong>Just commit.</strong> When I started, I didn’t start with the IsaBody Challenge being the main reason I joined.
        Even if you don’t want to, do it anyway, because it holds you accountable.</li>
      <li>
        <strong>Stay focused on your end goal.</strong> When you know you have pictures and measurements coming up during the
        IsaBody Challenge, believe me, it keeps you accountable.</li>
      <li>
        <strong>Share!</strong> I share my IsaBody Challenge story, and others have signed up based purely on hearing my experience.
        Trust the plan completely.</li>
    </ul>
    <h3>David's Favorite Products</h3>
    <ul>
      <li>IsaLean® Bars (Chocolate Decadence and Lemon Passion Crunch)</li>
      <li>IsaDelight® (Milk and Dark Chocolates)</li>
      <li>IsaLean® Shakes (Creamy Dutch Chocolate)</li>
    </ul>`;
  }

  private getElizabethBSuccessStory(): string {
    return `
    <h3>Paramedic Makes Life-Changing Decision</h3>
    <p>
      Growing up, Elizabeth was very active. She loved swimming and enjoyed participating in water polo. By 18, her athleticism
      transitioned out of the water and into CrossFit. As an adult, her fit, 170-pound frame made the physical demands
      of her job as a paramedic easier.
    </p>
    <p>
      It wasn’t until she became pregnant with her son and put on bed rest that her weight became an issue.
    </p>
    <p>
      "When I entered the hospital to have my son, I weighed 245 pounds," shares Elizabeth. "When I left, I was still well over
      220 pounds."
    </p>
    <p>
      She had gained 75 pounds in nine short months.
    </p>
    <h3>Running for a Reason</h3>
    <p>
      When her son was six months old, Elizabeth decided to start running—an exercise she never thought she could do, but was determined
      to try. By the time her son turned one, she was running 25 miles a week. Doing all that cardio only dropped Elizabeth’s
      weight to 190 pounds.
    </p>
    <p>
      That’s when she decided to take her friend up on her offer to try the Isagenix 30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      "She shared Isagenix with me while I was pregnant but I wasn’t open to it at the time," adds this California resident.
    </p>
    <p>
      It came to a point during one of her daily runs that she found herself feeding her son snacks and entertaining him with her
      iPad that she realized her workouts were no longer working out.
    </p>
    <h3>Taking Hurdles Head On</h3>
    <p>
      After taking the plunge and ordering the 30-Day System, she also teamed up with her mom and joined the IsaBody Challenge®.
    </p>
    <p>
      "I still remember my first month and losing 23 pounds,"* shares this 2014 Top Achievers Finalist. "That was an incredible
      milestone."
    </p>
    <p>
      By the end of her first Challenge she was down 34 pounds total.*
    </p>
    <p>
      Her hard work earned her Honorable Mention in the 2013 New Year Kick Off Challenge period and the chance to show off her
      sleek new physique onstage at our yearly event. Her transformation not only inspired others, but their vote of
      confidence inspired Elizabeth to sign up for another Challenge.
    </p>
    <p>
      At the end of her subsequent, back-to-back Challenge, Elizabeth released an additional 10 pounds. More importantly, she went
      from 39 percent to 16 percent body fat and released 80 inches from her body.*
    </p>
    <p>
      Her journey encouraged those around her to join Isagenix, which in turn, ignited her business.
    </p>
    <p>
      Because of her success, she has been able to step away from her 56-hour work week and substitute it with the money she’s
      making in her Isagenix business.
    </p>
    <p>
      Now, this 1-Star Golden Circle, Crystal Executive, who earns between $28,000 and $53,000 a year,** teaches paramedic school
      twice a month—not because she has to, but because she wants to!
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Commit!</strong> Make a commitment to yourself. Making a life change is not something you can do for anyone but
        yourself!
      </li>
      <li>
        <strong>Stick with it.</strong> Know that everyone has days when they struggle. Do not let what happened yesterday shape
        today.
      </li>
      <li>
        <strong>Have fun.</strong> Reward yourself along the way by trying new classes and even new activities.</li>
    </ul>
    <h3>Elizabeth's Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B®</li>
      <li>e+™</li>
    </ul>`;
  }

  private getErinPSuccessStory(): string {
    return `
    <h3>Celebration Finalist and IsaDerby Winner Envisions a Brighter Future</h3>
    <p>
      "I have struggled with my weight for years. Even though I was doing the right things, eating well and exercising, I wasn’t
      seeing results," admits 43-year-old Erin. "There were constant food cravings and I found myself overeating and
      overdrinking. So of course I was frustrated, exhausted and had very low energy." This mother of two always had
      a desire to help others. For fifteen years she served as a school counse-lor and mindset coach.
    </p>
    <p>
      "I loved working with children at school," reflects Erin. "But I always had a bigger vision, I wanted to contribute on
      a bigger scale. I wanted more income for my family, and I valued my time freedom. Even more, I wanted to spend
      that time with my family and enjoy the prospect that life is open to you."
    </p>
    <p>
      With her husband, Geoff, in the Canadian Air Force, Erin and her daughters were constantly on the go. Within a few years,
      the family had moved across the country four different times.
    </p>
    <p>
      Emotionally and physically, Erin was spent.
    </p>
    <h3>Health is No. 1</h3>
    <p>
      "My friend, Wendy, suggested I do a cleanse," recalls Erin. "I didn’t know anything about it, but knew that I needed to
      transform my health—that was number one, because I kept doing everything by my-self and that just wasn’t working."
    </p>
    <p>
      In 2011, Erin went on the 30-Day Cleansing and Fat Burning System and lost noticeable weight in the first month.* With the
      support of Wendy and other Isagenix Associates, Erin felt emotionally support-ed to achieve her goals.
    </p>
    <p>
      "After the cleanse, I felt energized and my sleep was much better," says Erin. "I felt amazing and hadn’t felt like this
      before."
    </p>
    <p>
      She continued to purchase the products when she realized that she could reap the benefits of Isagenix to help create income.
    </p>
    <p>
      "My first goal was to get my products paid for, which I did in my first few weeks," explains Erin. "Then I set a goal to
      get a new car. And the next week I did."
    </p>
    <p>
      In her first year, Erin made $100,000.** The now 5-Star Golden Circle, 4 star Crystal Executive had so many goals and visions
      for her future, that she aimed to win IsaDerby™ in her first year.
    </p>
    <p>
      "I was the number one point earner in 2011 and have been to IsaDerby three years in a row," exclaims Erin. "It’s the same
      solid mindset to win IsaDerby that got me to the IsaBody finals."
    </p>
    <h3>Envisioning A Better Future</h3>
    <p>
      "Every year I would join the IsaBody Challenge®, but never completed it," reflects Erin about her health journey. "That
      first year I kept my weight off and felt great. And then my second year, we moved across the country and I just
      got so focused on building my business that my life got out of balance."
    </p>
    <p>
      It was during that time that Erin stopped exercising and taking care of herself.
    </p>
    <p>
      "I think it was fear of losing my business," admits Erin. "It was the fear of it going away or I guess I had to build trust
      that this was going to stay." She knew that she had to beat this perspective and envisioned a new goal for herself.
    </p>
    <p>
      "I made the decision that I wanted to represent Isagenix in all areas: as an athlete, as a woman who’s aging in a healthy
      way, and as a woman who’s making income for her family," says Erin.
    </p>
    <p>
      In January 2014, Erin wrote a note on a recipe card about the person she wanted to become.
    </p>
    <p>
      "I want to be an IsaBody Finalist. I want to get into elite shape. I want to be a woman who does not apologize for who she
      is. A women who follows through," wrote Erin.
    </p>
    <p>
      By successfully competing in the IsaBody Challenge, Erin released 24 pounds.* Now at 5’6" and 134 pounds,* she feels like
      the person she’s always wanted to become.
    </p>
    <p>
      "The biggest thing that the IsaBody Challenge has taught me is that my future has unlimited potential," emphasizes Erin.
      "Before, I had a lot of fear about the future. And now the biggest change is that I’m excited about it!"
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Make a decision.</strong> Decide with absolute clarity what you want to achieve and who you get to become on
        this journey.</li>
      <li>
        <strong>Write down your goals.</strong> Visualize yourself making these a reality. Every night plan out your next day,
        the products you are using, your meals, your fitness and time for yourself.</li>
      <li>
        <strong>Plug in to the support!</strong> Join your team’s Facebook support page, listen to Isagenix podcasts, go to local
        Isagenix events, and surround yourself with people and information that support you.</li>
      <li>
        <strong>Never quit.</strong> When you feel like you’ve hit a roadblock, ask for help, take a deep breath and keep moving
        toward your goal. Consistency will bring you massive success… Quitting is the only way to fail!</li>
    </ul>
    <h3>Erin's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro (Creamy Vanilla)</li>
      <li>Brain and Sleep Support System™</li>
      <li>Ionix® Supreme</li>
      <li>IsaOmega Supreme®</li>
    </ul>`;
  }

  private getJasonOSuccessStory(): string {
    return `
    <h3>U.S. Military Veteran Takes on New Challenge</h3>
    <p>
      Jason was attached to the special operations unit in the U.S. Army in the 1990s. Back then, his life was about traveling
      the world, participating in various military operations and experiencing unbelievable journeys.
    </p>
    <p>
      "I was living the adventure and my dream," says the now 39-year-old Jason. "Back then, I really thought I was in the best
      shape of my life. Being in top physical and mental condition was essential to being a soldier because you never
      knew what was around the corner."
    </p>
    <p>
      When he returned home to the United States after eight honorable years of service, Jason couldn’t help but feel a "sadness
      in his heart."
    </p>
    <p>
      "I missed the recognition for doing well," shares Jason. "A lot of times, you just don’t get that in the civilian sector."
    </p>
    <h3>Adjusting Back to the Norm</h3>
    <p>
      Shortly after his discharge, he began working as a supervisor in a warehouse in his home state of New York, and then later
      in Durham, North Carolina. That’s when he started developing some not-so-healthy habits—including smoking and poor
      eating.
    </p>
    <p>
      "Within 10 years as a supervisor, my health started to deteriorate," reflects Jason. "I had undergone three abdominal hernia
      surgeries between 2006 and 2011. My life and self-worth were at an all-time low. Deep down, I knew I wasn’t doing
      what I was meant to do."
    </p>
    <p>
      At only 5’4", Jason tipped the scale at 215 pounds.
    </p>
    <p>
      "I would stand in once place and literally be crushed under my own weight," he admits. "I couldn’t even bend over and tie
      my shoes due to weight gain. Obviously, that’s not the best place to be."
    </p>
    <p>
      After a divorce, custody battle and resigning from the warehouse industry, Jason knew the negative signs were meant for him
      to turn his life around.
    </p>
    <p>
      "I just let life get to me and thought: ‘I need to take control,’" says Jason.
    </p>
    <h3>Regaining Life</h3>
    <p>
      In September of 2012, Jason’s now-fiancé, Sandra, introduced him to Isagenix and the IsaBody Challenge®.
    </p>
    <p>
      "I saw the IsaBody Challenge as a chance for me to make my mark in a positive way—not only to improve my health and wellness,
      but to be able to inspire others to have the courage to embark on their own journey," says Jason. "The Challenge
      gave me an opportunity to look in the mirror and make myself the person who I’ve always wanted to become."
    </p>
    <p>
      Now, Jason is 163 pounds and went from a size 40 to a 29.*
    </p>
    <p>
      "I haven’t been that size since I was a freshman in high school," exclaims Jason.
    </p>
    <p>
      What impresses Jason most about the Challenge isn’t the weight loss—it’s the friendships and recognition gained that reminded
      him of Army camaraderie.
    </p>
    <p>
      "As time grew, it became clear to me that Isagenix is more than a Challenge," explains Jason. "The people you meet—that
      touched your heart, that inspired you and that you’ve been inspired by—it’s just tremendous. You see that same
      comradeship in the military and I appreciate how that is reflected in Isagenix. You think, ‘How everybody wants
      you to succeed and how can you turn that down?’"
    </p>
    <p>
      Jason now no longer carries the nostalgia from the Army, finally realizing that it’s time to start a new chapter in life.
    </p>
    <p>
      "My biggest milestone throughout the IsaBody Challenge was that I had no desire to fall on those crutches: the smoking and
      the excessive eating. That’s all gone now."
    </p>
    <p>
      Now Jason is focused on achieving the positive life that he never knew he could have.
    </p>
    <p>
      "Isagenix is a lifestyle change," says Jason. "And I love explaining to people that there’s nothing out there worth having
      if you don’t work hard for it. That’s what the IsaBody Challenge did for me."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Nutrition is key.</strong> You can’t out-exercise poor eating habits.</li>
      <li>
        <strong>Make the commitment.</strong> Make a healthy active lifestyle a priority. Engage in activities that you enjoy.</li>
      <li>
        <strong>Surround yourself with like-minded people.</strong> Stick with individuals that will share your hopes and dreams.
        Positive company can motivate and inspire you when you need it most.</li>
      <li>
        <strong>Share your story.</strong> You may really be surprised by those whom you inspire with your success.</li>
    </ul>
    <h3>Jason's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>e+™ Energy Shot</li>
      <li>Replenish™</li>
    </ul>`;
  }

  private getJenniferRSuccessStory(): string {
    return `
    <h3>Former Trainer Finds Path Back To Glory</h3>
    <p>
      Jennifer was always on the go. An avid athlete, she worked diligently to keep her weight in check – until she hit her 30s
      when her weight started to slowly creep up. "My weight yo-yoed, up, then down, then up again," she says. "I was
      all over the map."
    </p>
    <p>
      Jennifer remembers her early career and her deep connection to physical fitness. After receiving her honors degree in Fitness
      and Lifestyle Management, Jennifer worked as a personal trainer throughout her 20s. However, even with her passion
      for fitness, her health-and-wellness challenges started to mount.
    </p>
    <h3>Going to the Dogs</h3>
    <p>
      Jennifer recalls when things began to change. "My life went to the dogs," she says, "literally." Steering away from her
      health and fitness roots, she made a drastic lifestyle change. She moved north from the city of Toronto out to
      the country and began raising Alaskan Malamutes and became a professional dog trainer and groomer.
    </p>
    <p>
      "I spent lots of time on the road, going to dog shows and competitions," she says. "Everything I did was for the sake of
      my dogs’ performances." She discusses the sacrifices and eventual toll of her commitment, "I didn’t exercise
      or make healthy food choices, and my figure paid the price."
    </p>
    <h3>Isagenix Unleashed</h3>
    <p>
      Jennifer decided to kick a new healthy, Isagenix-powered lifestyle into high gear. "A close friend from college, Tinya G.,
      was doing something really remarkable with Isagenix," Jennifer recalls, "I decided to find out more."
    </p>
    <p>
      "Tinya hosted Isagenix parties at her house and was clearly doing something to turn her life around," Jennifer says. "I
      finally reached out to her," Jennifer admits, "but I was very apprehensive. When I discovered the healthy nutrition
      in the products, though, I just knew I’d be wowed by the results."
    </p>
    <p>
      By day four of her first 30-Day Cleansing and Fat Burning System, she became a true believer, both of the product and the
      business. "I’ve always been receptive to network marketing," Jennifer says. "When I discovered Isagenix, I knew
      I found my home."
    </p>
    <h3>From Mush to Muscle</h3>
    <p>
      When she committed to the IsaBody Challenge, Jennifer was once again driven. "It’s a complete 180-degree change," she shares,
      discussing her transformation due to the IsaBody Challenge.
    </p>
    <p>
      The goals she set for herself at the start of the Challenge helped her get serious about completing it. "When I started this
      Challenge, I discussed the importance of completing it with an Associate on another team," she says. "That really
      helped me focus."
    </p>
    <h3>Success of the Highest Pedigree</h3>
    Isagenix started as a weight release journey for Jennifer, but it has turned into so much more. "I did three 30-Day Cleansing
    and Fat Burning Systems back-to-back to lose the initial weight," she says. "I’ve gained amazing strength, incredible
    energy and unheard-of recovery levels. I thank the products and my training and focus in the IsaBody Challenge for
    that."
    <p>
      Jennifer has now retired from her career as a dog groomer, but continues to breed and show dogs as a hobby. "Isagenix is
      my career now," she says. "Inspiring others to get the very best from life makes me more passionate about my
      own journey."
    </p>
    <h3>Jennifer's Tips for Success</h3>
    <ul>
      <li>Don’t wait for the perfect time to start the IsaBody Challenge – start now!</li>
      <li>It starts with baby steps toward a goal you set you yourself – look to make daily progress, and celebrate every
        triumph, big or small.</li>
      <li>The potential for everyone to achieve their goals is totally realistic. You have all the support in the world –
        you just have to reach out for it.</li>
    </ul>
    <h3>Jennifer's Favorite Products</h3>
    <ul>
      <li>Product B® IsaGenesis®</li>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getJudyLSuccessStory(): string {
    return `
    <h3>Top Achievers Finalist Discovers Confidence at 60</h3>
    <p>
      "Internally, I felt confident," shares Judy, a 2014 IsaBody Challenge Top Achievers Finalist. "But externally, I held back
      and was unsure of my actions, second guessing myself all the time."
    </p>
    <p>
      For the past 10 years, the Ontario native spent her time as a body-oriented psychotherapist. Helping others create strong
      mental health was a lifelong goal for Judy since childhood. But eventually, guiding individuals to work through
      their trauma got the best of her, despite Judy’s dream of caring for others.
    </p>
    <p>
      "I think the biggest part of the IsaBody Challenge has been the belief that you can do what you want to do to make a difference
      in the lives of yourself, your family and the people around and in the world at large," reflects Judy, now a
      2-Star Golden Circle, Executive. "Yet, once I started believing in myself and gaining strength through the Challenge,
      I saw that I could actually make a bigger change in the world."
    </p>
    <h3>Making the Change</h3>
    <p>
      Clearly, working in the world of distress took its toll on Judy, who was 5’5" and a size 12 at 138 pounds before discovering
      Isagenix in 2007.
    </p>
    <p>
      "I was emotionally and physically exhausted," says this mother of two and wife of 23 years to her husband, Jim. "Even with
      strong boundaries between work and family, I became moody, struggled with weight gain and knew that I was in trouble."
    </p>
    <p>
      Confiding in her friend, Dr. Rick, about her inner feelings, he gave Judy the tools toward a rejuvenated life. After introducing
      her to the 30-Day Cleansing and Fat Burning System, Judy released 22 pounds in five weeks.*
    </p>
    <p>
      "I felt great, but after using Isagenix for seven years, I still felt delicate inside," says Judy. "I knew that I needed
      to find my strength through confidence. I needed to physically ramp it up in order to show others what’s possible
      when you focus on healthy living and aging gracefully."
    </p>
    <h3>Dispelling a 'Myth'</h3>
    <p>
      Before turning 60 in August 2013, Judy decided to join the IsaBody Challenge. Now the lean 116-pound Judy is a size two*
      and has discovered her inner confidence through external strength.
    </p>
    <p>
      "I’m honored to be a finalist," says Judy. "What gave me the strength was the idea to dispel the myth that when you turn
      60, you’re starting to slow down. Somehow, being physically strong allowed me to recognize that this was the real
      me. This is the one that didn’t have to second guess herself."
    </p>
    <p>
      As a Top Achiever Finalist, Judy’s been awarded $3,000 cash, a trip for herself and a guest to 2014 Top Achievers, 2014 Celebration
      and a spot aboard the 2014 IsaBody Challenge Transformation Cruise.***
    </p>
    <p>
      "I feel like I’m an ambassador for the company since I became a finalist," reveals Judy. "I’ve had people turn to me and
      let me know that I inspire them—and to me, that is so powerful. It means that I have to live every single day to
      be the best that I can be."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Make a commitment.</strong> Tell everyone that you’re completing a goal. That way, there’s no turning back once
        you’ve said it out loud.</li>
      <li>
        <strong>Believe in yourself.</strong> You’ll always go through areas of self-doubt and diminishing willpower, but always
        believe that you can accomplish your goal.</li>
      <li>
        <strong>Stick to consistent and persistent action.</strong> Never give up and focus on what is possible.</li>
      <li>
        <strong>Find a partner to get you through this.</strong> My husband helped me through my last Challenge and then decided
        to get on board. I enjoy being a guide as to how he should approach the program.</li>
    </ul>
    <h3>Judy's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaDelight™</li>
      <li>IsaLean® Shakes</li>
      <li>Rejuvity® Essential Youth Serum™</li>
    </ul>`;
  }

  private getRandyFSuccessStory(): string {
    return `
    <h3>Marching To The Beat Of A New Drummer</h3>
    <p>
      Your world can change in an instant. Few know this as well as IsaBody Challenge® Finalist, Randy. "Unlike a lot of others,
      I didn’t struggle with my weight when I was growing up," confesses the retired 20-year Army veteran. "At least
      not at first."
    </p>
    <p>
      Randy recalls his youth. "I was always fit; I played football at Oklahoma State University. I had no desire to go into the
      military," he confesses, "but in the early 1970s, scholarship athletes had to be in ROTC. Thus after graduation,
      I entered the Army. I even served on General Schwarzkopf’s medical staff during Desert Storm."
    </p>
    <h3>Being All He Could Be</h3>
    <p>
      After the Army, Randy was recruited to take a job in the healthcare industry. "I took a position as a Managed Care Director
      for Colorado, Kansas and Oklahoma. He explains, "I was overqualified but took the job." Although Randy excelled,
      he shortly found out what "At Will" meant.
    </p>
    <p>
      Then, things took a turn.
    </p>
    <p>
      "After I was let go, I went into a downward spiral," Randy recalls, "I was devastated and it impacted my family." Life
      began to unravel. "Every subsequent year my waistline kept up with my age. I had a hard time functioning." Randy’s
      ongoing weight gain and health issues became a growing concern for his family.
    </p>
    <h3>A Turn for the Worse</h3>
    <p>
      With a new career as a mortgage broker and health obstacles mounting, Randy’s health–and morale–worsened. "Just getting out
      of bed and doing basic life activities exhausted me. My family feared I was heading for a heart attack."
    </p>
    <p>
      Never one to quit, Randy was determined to reshape his destiny. "I was eager to make some positive changes," he confides.
      "I needed to get my life back."
    </p>
    <h3>Enter: The Isagenix Cavalry</h3>
    <p>
      Concerned for his health, Randy’s wife suggested speaking to a friend. "Julie is a friend of my wife living in Florida. She
      recommended Isagenix." Isagenix was exactly what he was looking for. "The first time I tried the 30-Day Cleansing
      and Fat Burning System, I lost 29 pounds."* I was astonished by the results." Then, Randy discovered the IsaBody
      Challenge®.
    </p>
    <h3>Back to Basic Training</h3>
    <p>
      Randy excels at what he sets his mind to. "I’ve always been a top achiever. As an IsaBody Challenge Finalist," he beams,
      "my transformation transcended across my weight loss, healthy aging, and energy and performance goals. I now plan
      to transform my financial status by sharing Isagenix with everyone!"
    </p>
    <p>
      Randy’s self-esteem is back. "After NYKO, I’m ready!" He shares other milestones. "My workouts have more energy than ever.
      I have more confidence than I’ve had in years."
    </p>
    <p>
      Randy looks forward to building his Isagenix business. "When I work out, people come up and ask, ‘Is this really true or
      how are you doing this?’ I tell them, ‘Yes, it’s Isagenix.’" He wears a T-shirt with how much weight he’s released
      printed on it. "In the gym, others come up and share their struggles and tell me what an inspiration I am to them.
      I’m looking great and best of all," he says confidently, "I feel like a winner!"
    </p>
    <h3>Randy's Tips for Success</h3>
    <ul>
      <li>Make a decision and commit to your goals and dreams. Write them down and have them in realistic bite-sized chunks.
        I achieved my milestones 10 pounds at a time.</li>
      <li>Invest in yourself, not things! You can transform your life by using the products daily and following the time-proven
        system. The IsaBody Challenge keeps you accountable with a unified community that encourages success. Join us!</li>
      <li>Regardless of your age or the shape you are in, it’s never too late to start and it’s always the "right time"
        for Isagenix!</li>
    </ul>
    <h3>Randy's Favorite Products</h3>
    <ul>
      <li>e+™ Energy Shot</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse For Life®</li>
    </ul>`;
  }

  private getShelaghRSuccessStory(): string {
    return `
    <h3>Part-time Administrator Looks Fabulous at 50</h3>
    <p>
      After deciding to leave a very unhealthy relationship, Shelagh knew she needed time to rebuild her life and her self-esteem.
    </p>
    <p>
      Her best friend suggested Isagenix knowing its products’ ability to boost energy and endurance.
    </p>
    <p>
      "I said ‘no’ for the first few months," admits Shelagh. "I just couldn’t open up to it."
    </p>
    <p>
      During that time, her moods would fluctuate from high to low and her energy was completely deflated. She knew if she didn’t
      pull herself up, she would eventually lose her job as an administrator for a condominium developer.
    </p>
    <p>
      Coming to that realization opened Shelagh’s mind to trying Isagenix.
    </p>
    <h3>Opening Up To Isagenix</h3>
    <p>
      "By my third day on the Pacesetter Pak I was already feeling more motivated and uplifted," shares Shelagh. "I felt positive
      and full of energy, but I knew I needed all the support I could get to follow through."
    </p>
    <p>
      So, she also signed up for the IsaBody Challenge®.
    </p>
    <p>
      "It was a 16-week goal and I couldn’t give up," explains Shelagh, "because I knew other people were doing it too."
    </p>
    <p>
      Within her first few weeks on the products, Shelagh released 10 pounds* and felt healthier and stronger than she had in a
      while.
    </p>
    <p>
      Once she saw what the products could do for her body, she was open to meeting the people of Isagenix and attended an opportunity
      meeting in Toronto. Inspired, she embarked on a new journey, building an Isagenix business, and decided to use
      the Challenge as her platform.
    </p>
    <p>
      While her success was fast moving, one thing still lingered in her mind.
    </p>
    <h3>Finishing What You Start</h3>
    <p>
      "I wrote in my first Challenge essay that ‘I’m considering a Figure Competition at 50, fueled by Isagenix,’" shares Shelagh.
    </p>
    <p>
      With that goal still in limbo, she entered her second Challenge and set a firm goal to compete in a figure competition in
      May of 2014.
    </p>
    <p>
      In addition to her daily Isagenix products, Shelagh added extra Ionix® Supreme, Product B®, omega-3 essential fatty acids,
      Isagenix Greens!™ and IsaPro® for a boost in nutrition.
    </p>
    <p>
      "What I began to notice was that even though I had not weight trained in over five years, I was astounded by how much I could
      lift," admits Shelagh, "how fast I recovered from my workouts, how much energy I still had, and how balanced
      I felt."
    </p>
    <h3>Fabulous at 50</h3>
    <p>
      In total, Shelagh ended up releasing 35 pounds since starting her Isagenix journey and whittled her waist line to slip into
      a size zero pair of jeans.*
    </p>
    <p>
      She also fulfilled her original goal, taking second place in her category at the fitness competition proving she could look
      fabulous at 50!
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li><strong>Know your "why."</strong> Ask yourself why you are joining the Challenge and write down a powerful "why".</li>
      <li><strong>Get social.</strong> Get tapped into Facebook groups and the IsaBody Challenge podcasts.</li>
      <li><strong>Have a support team.</strong> Announce that you have joined the Challenge to your family and friends so they support you.</li>
      <li><strong>Keep it simple.</strong> Do things in moderation—sleep, nutrition and exercise.</li>
    </ul>
    <h3>Shelagh's Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shake</li>
      <li>Ageless Essentials™ with Product B®</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getThaiLSuccessStory(): string {
    return `
    <h3>Third Time’s the Charm for Thai’s Transformation</h3>
    <p>
      At 5’1", Thai often blended into the background. Something he didn’t mind, especially since he wasn’t 100 percent comfortable
      with his body. "Any extra pound looks like five on my frame," he shares. At a starting weight of 148 pounds,
      Thai was healthy and athletic, but his physique was far from ideal.
    </p>
    <p>
      He routinely worked out hard and even drank protein shakes, but he didn’t have a solid system and he wasn’t seeing lasting
      results. At 40, his athletic endeavors—like two-day volleyball tournaments and 10k races—left him exhausted and
      sore.
    </p>
    <h3>Starting the System</h3>
    <p>
      In 2011, Thai was introduced to Isagenix with the 9-Day Cleansing and Fat Burning System. He was about to go on vacation
      and wanted to trim down. The system helped him shed some torso fat and reveal the abs underneath. His success led
      him to try a 30-Day Cleansing and Fat Burning System and eventually the Energy and Performance System. He knew
      Isagenix worked for him, he’d even entered the IsaBody Challenge a few times, but it wasn’t until this year that
      he actually completed a Challenge. For him, his third try was the charm.
    </p>
    <h3>Seeing Results</h3>
    <p>
      Thai went into his third IsaBody Challenge determined (and prepared) to succeed. He created a vision board to help him stay
      focused on his goal, checked in with Barbara (his Isagenix mentor) weekly and scheduled everything. Every day Thai
      knew how many days were left in the Challenge, when he needed to eat and what he’d be doing for a workout.
    </p>
    <p>
      It all paid off. Thai earned a spot as one of the top five Celebration IsaBody Challenge finalists. He’ll appear onstage
      at our 2014 Celebration event as one of 15 finalists who could win the Grand Prize, valued at over $25,000.
    </p>
    <p>
      But that’s not all Thai’s won. He’s more confident than he’s ever been. He has more energy and recovers faster than he ever
      has (and faster than some of his younger teammates). He’s started an Isagenix business and is enjoying meeting
      new people and sharing the products that fueled his success. Thai also took on something new. He competed in his
      first-ever bodybuilding competition where he placed sixth, among competitors that, in some cases, have been training
      for years!
    </p>
    <p>
      "I noticed that people backstage at the competition who weren’t using Isagenix were tired and cranky," Thai recalls. He,
      on the other hand, "was full of energy, feeling good and ready to go." And, that’s the way he feels every day,
      thanks to Isagenix.
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Use the System.</strong> The system works. Trust it and use it consistently.</li>
      <li>
        <strong>Don’t Go it Alone.</strong> You need a support system to successfully complete the Challenge. It really helps
        to work with someone who has completed the Challenge. Check in regularly and share your success as you go!</li>
      <li>
        <strong>Visualize Success.</strong> To be successful, you must first have a goal to work toward. Create a vision board
        that captures your personal goals so you can envision the outcome of the challenge.</li>
      <li>
        <strong>Stick to a Schedule.</strong> The IsaBody Challenge is only 16 weeks long. Create and stick to a schedule (eating,
        working out, etc.) so you can stay on track to complete the Challenge and achieve your goals.</li>
    </ul>
    <h3>Thai's Favorite Products</h3>
    <ul>
      <li>e+™</li>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials with Product B®</li>
    </ul>`;
  }

  private getWillASuccessStory(): string {
    return `
    <h3>‘Will’ Power Made the Difference</h3>
    <p>
      "As a kid, I was overweight," shares Will. "In high school, I played baseball—overweight. It wasn’t until I was 16 years
      old that I really started to take an interest in diet and exercise."
    </p>
    <p>
      His determination to fit in and shed those unwanted pounds provided him with a platform to rely on himself and become his
      own teacher.
    </p>
    <p>
      "I went on to play college baseball," adds Will. "That opportunity allowed me to focus on my nutrition and uncover my true
      passion: health and wellness."
    </p>
    <p>
      With health and fitness at his very core, Will embarked on a new journey and entered the realm of bodybuilding.
    </p>
    <h3>Falling Off Track</h3>
    <p>
      "I wanted to compete in bodybuilding, not to become a bodybuilder," explains Will, "but, to be a fitness role model to others."
    </p>
    <p>
      Over the next year and a half Will competed in eight men’s physique competitions, which required he eat six times a day.
    </p>
    <p>
      "Your diet regimen is insane," shares Will. "It’s an unrealistic lifestyle."
    </p>
    <h3>Eventually Something Had to Give</h3>
    <p>
      "I needed a break," explains Will. "I needed a couple of months to mentally regroup. I was overworked, overtired, and over
      my extreme dieting. That’s when it all came back—all the body fat I had worked so hard to lose."
    </p>
    <p>
      Coincidently, Will’s friends had just shared Isagenix with him.
    </p>
    <h3>Powered By Others</h3>
    <p>
      "Because I give everything a chance, I agreed to look into the company," shares Will. "I looked into the science, checked
      out the ingredients and perused the products; and, because I really trusted those I surround myself with, I decided
      to put the stuff to the test."
    </p>
    <p>
      With that, he decided to train for another competition and use Isagenix products to prepare.
    </p>
    <p>
      "I was going to push these products to the limit and test them on myself," laughs Will.
    </p>
    <p>
      He started with the IsaPro®. Then, he slowly added in Ionix® Supreme.
    </p>
    <p>
      "I was doing two meals and two meal replacement shakes with either IsaLean® Pro or IsaPro every day," says Will. "I also
      did a few Cleanse Days."
    </p>
    <h3>Customized Success</h3>
    <p>
      Because of the high daily protein intake Will needed to sustain training, he customized his program, yet still adhered to
      two shakes a day. He also joined the IsaBody Challenge®.
    </p>
    <p>
      "The typical 30-Day Cleansing and Fat Burning System wasn’t enough food for me. I needed more," explains Will. "Plus, it
      typically takes 16 weeks to prepare for a national level competition; and the Challenge is 16 weeks. I though it
      was the perfect way to hold myself accountable."
    </p>
    <p>
      By the time Will stepped on stage to compete in the men’s physique category he had chiseled out his physique. He also released
      31.9 pounds* since joining Isagenix.
    </p>
    <p>
      He was so impressed with his results he couldn’t stop talking about the products and decided to take advantage of the business
      opportunity with his girlfriend and current 2014 Miss Arizona title holder, Savanna Troupe.
    </p>
    <p>
      "The biggest difference between training now versus in the past has been the convenience of the products," shares Will, "and,
      to be able to introduce something as convenient as an Isagenix system has been a game changer for me and most of
      my clients."
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>
        <strong>Have fun.</strong> Have fun and enjoy the goal you are trying to attain. Find an exercise that you like and find
        enjoyable. Everybody’s goals are different.</li>
      <li>
        <strong>Stick with it.</strong> Find something convenient to follow; it’s a lifestyle change not a diet.</li>
      <li>
        <strong>Take action.</strong> Stop planning and preparing, just start!</li>
    </ul>
    <h3>Will's Favorite Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>Ionix® Supreme</li>
      <li>Cleanse for Life®</li>
      <li>e+™</li>
    </ul>`;
  }
}
