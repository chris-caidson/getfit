import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2008Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "anthony-d": htmlString = this.getAnthonyDSuccessStory(); break;
      case "bruce-and-theresa-c": htmlString = this.getBruceAndTheresaCSuccessStory(); break;
      case "ciera-w": htmlString = this.getCieraWSuccessStory(); break;
      case "derrek-s": htmlString = this.getDerrekSSuccessStory(); break;
      case "elaine-g": htmlString = this.getElaineGSuccessStory(); break;
      case "gary-m": htmlString = this.getGaryMSuccessStory(); break;
      case "jess-b": htmlString = this.getJessBSuccessStory(); break;
      case "joe-b": htmlString = this.getJoeBSuccessStory(); break;
      case "linda-o": htmlString = this.getLindaOSuccessStory(); break;
      case "lyndsay-and-cory-s": htmlString = this.getLyndsayAndCorySSuccessStory(); break;
      case "mary-p": htmlString = this.getMaryPSuccessStory(); break;
      case "matt-c": htmlString = this.getMattCSuccessStory(); break;
      case "michelle-p": htmlString = this.getMichellePSuccessStory(); break;
      case "mike-w": htmlString = this.getMikeWSuccessStory(); break;
      case "radha-b": htmlString = this.getRadhaBSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAnthonyDSuccessStory(): string {
    return `<h3>Grand Prize Challenge Winner Drops Nearly Half His Weight, Commits to Healthier Future</h3>
    <p>
      College is supposed to be one of the greatest times in life, but 22-year-old Anthony had been busy avoiding activities like
      riding roller coasters or going to baseball games because of his size. Everyday activities like finding a chair he
      could fit into at school or the movie theater was difficult for his 400-pound frame.
    </p>
    <p>
      But since discovering Isagenix®, Anthony is enjoying a freedom he hadn’t experienced in more than three years.* Now 153 pounds
      lighter, nearly 16 pant sizes smaller* and the grand prize winner of the 2008 IsaBody Challenge®, he’s riding roller
      coasters again and enjoying watching his favorite baseball team the New York Mets in what were once-cramped stadium
      seats.
    </p>
    <p>
      "It’s amazing how my life has changed so far," laughs Anthony of New Jersey. "In just a short amount of time, everything
      is easier and there’s so much less to worry about."
    </p>
    <p>
      While Anthony has always been on the heavier side, it wasn’t until he graduated from high school and no longer had to "make
      weight" for football and wrestling that his weight began to spiral out of control. Within a year, he had put on about
      100 pounds and had trouble walking. His parents warned him about the dangerous health conditions that existed on
      both sides of his family and encouraged him to make healthier decisions. It wasn’t until his grandfather underwent
      a serious operation that reality finally hit home.
    </p>
    <p>
      Normally a tough man who rarely shows emotion, Anthony’s grandfather looked at him soon after surgery and told him to take
      care of himself. His grandfather’s words struck a cord and Anthony realized he needed to make a change. Within days
      he had joined a gym and was determined to exercise the weight off. Fortunately, he also ran into a friend at the
      gym who encouraged him try Isagenix.
    </p>
    <p>
      Anthony decided to sign up for the 2008 IsaBody Challenge® soon after to help him stay on track. He pored over the Challenge
      Web site and listened to every conference call featuring guests who had done the unthinkable and lost incredible
      amounts of weight. One of his biggest inspirations was 2007 IsaBody Challenge® Grand Prize Winner Mark Macey who,
      ironically, weighed the same amount Anthony did when he started the Challenge.
    </p>
    <p>
      As the weight began to come off, Anthony’s family kept rooting for him and even changed the family meals to healthier options
      so they wouldn’t tempt him. His mother and brother joined his efforts and also began using Isagenix to get healthier.
      He encountered numerous milestones along the way, including the time when he was able to use the gym’s scale, which
      reached 300 pounds. Now he’s even able to shop at the mall for his size 42 pants, something he hadn’t been able to
      do in three years.
    </p>
    <p>
      Though he’s lost a substantial amount of weight and is now running and lifting weights nearly every day, he’s still determined
      to reach two of his ultimate goals of getting below the 200-pound mark on the scale and being inducted into the Isagenix
      200-Pound Club by January of 2009.
    </p>
    <p>
      As the grand prize winner of the Challenge, Anthony is still floored that he was chosen to receive the $10,000 prize and
      title, but says his ultimate health has been the key motivator during his journey.
    </p>
    <p>
      "I want to forever remember 2008 as the year I took control of my life and changed it for good," shares Anthony. "This is
      just the beginning and I can’t wait to accomplish all of my goals."
    </p>
    <h3>Anthony’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Visualize how you want to look and set your mind to achieving it.</li>
      <li>Set goals along the way, whether it’s losing a certain amount each week or fitting into a certain size of clothes.</li>
      <li>Get support from your family and the Isagenix® community. There are plenty of people out there who want to encourage
        you and help you succeed.</li>
    </ul>
    <h3>Anthony’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>IsaFruits®</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes</li>
      <li>Amped Hydrate®</li>
    </ul>`;
  }

  private getBruceAndTheresaCSuccessStory(): string {
    return `<h3>Couple Maintains Toned Physiques With Nutritional Cleansing and Exercise</h3>
    <p>
      Bruce and Theresa didn’t have tons of weight to lose when they committed to the 2008 IsaBody Challenge®, but they were hungry
      for change. Bruce, a busy nurse and firefighter, was gone from sun up to sundown trying to help the family make ends
      meet while Theresa stayed at home with their children. Though the pair both had been regular exercisers throughout
      their entire marriage and watched their diets faithfully, they both knew they needed to kick it up a notch.
    </p>
    <p>
      That’s when they committed to the Challenge. After losing a combined total of 55 pounds and 57 inches* and producing incredible
      "after" shots, the couple won first place in the family category plus the $10,000 prize that came with it. They might
      have reaped the rewards of winning the Challenge, but it didn’t stop there. "Once you start Nutritional Cleansing
      with Isagenix®, you don’t want that incredible energy to stop," says Bruce, who still drinks his daily IsaLean® Shake
      and takes Essentials for Men™ each morning. "We knew we were giving ourselves the best nutrition."
    </p>
    <p>
      Before the Challenge, Theresa ran a few times a week and lifted weights regularly, but she still had stubborn pounds that
      wouldn’t seem to let go of her body even after she exercised and watched what she ate. Her sister’s mother-in-law
      introduced her to Isagenix, she took her "before" pictures for the Challenge and the rest is history. Since then,
      she’s maintained her weight through a Cleanse Day each week, exercising moderately and committing to the 30-Day System
      with her husband. The couple admits that like anyone, they slipped up during the holidays, but unlike past years,
      they now have a solution to take care of the extra pounds in a healthy way.
    </p>
    <p>
      Bruce, a former competitive body builder who won first place in the local police and firefighter games in his community after
      the Challenge, has now found his stride with exercise and is back into his bodybuilder exercise routine. He includes
      bikram yoga for flexibility, regular hour-long sessions with weights and running on the treadmill as part of his
      regular exercise routine and is looking forward to competing in the games again this year. He says the key to improving
      your fitness comes down to one thing: cross training. "You’ve got to train hard in the areas you’re weakest at,"
      he says. "You’ve got to get out of your comfort zone and try different things you might not typically try like swimming,
      yoga or hiking."
    </p>
    <p>
      Theresa and Bruce are both working on building their Isagenix business and so far have generated enough income to allow Theresa
      to continue to stay home with their kids. They’ve even motivated three new Associates to sign up for the 2009 Challenge.
      "Isagenix is the best lifestyle adjustment we ever made," says Bruce. "Now we can teach others how to take care of
      their bodies and experience greater health because we have the products to help them get there."
    </p>
    <h3>Bruce and Theresa’s Success Tips</h3>
    <ul>
      <li>Try a system with your spouse or friend. Sharing the experience will help bring you closer together.</li>
      <li>Share Isagenix® with family and friends. It has built a common bond with our family and has deepened our relationships.</li>
      <li>Set a realistic goal and go for it.</li>
      <li>Follow the system as intended. Don’t micromanage yourself in the process.</li>
      <li>Incorporate Isagenix into your family lifestyle. Our kids love having IsaLean® Shakes every day.</li>
      <li>Try the nutritional supplements. In addition to ordering a system, compare the Essentials for Men™ and Essentials
        for Women™ and IsaOmega Supreme® to the products you have in your cabinet and see how Isagenix products compare
        in completeness.</li>
    </ul>
    <h3>Bruce and Theresa’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes</li>
      <li>Essentials for Men™ and Essentials for Women™</li>
      <li>IsaOmega Supreme®</li>
      <li>IsaPro®</li>
    </ul>`;
  }

  private getCieraWSuccessStory(): string {
    return `<h3>Ciera Discovers Her Beauty, Stops Hiding</h3>
    <p>
      Ciera of Utah is like many 22-year-old girls. She enjoys spending time with friends, taking classes and looks forward to
      the future. But for a long time, her outward appearance didn’t match how she felt on the inside and her lack of self-confidence
      kept her from completely being herself. Convinced she had to conceal her body’s curves, for years she hid them by
      wearing a bodysuit underneath her clothes to make herself look thinner. She hated the form-fitting bodysuit and many
      times her friends even encouraged her to ditch it, but she just couldn’t bring herself to do it. It wasn’t until
      she made up her mind that she wanted to change and started using Isagenix® that she was finally able to come out
      of hiding.
    </p>
    <p>
      Ciera began her weight-loss journey by signing up for the 2008 IsaBody Challenge®. It took a firm commitment and the support
      of her family and friends to help her to make healthy food and lifestyle choices. Soon, she began having IsaLean®
      Shakes daily and started to "crave the nutrition." Daily walks with her father got her active again and she still
      enjoyed a little splurge on a cookie every once-in-a-while.
    </p>
    <p>
      Ciera says her future goals reminded her of why she needed to stick with the change. "I’m going to school to be a hairdresser
      and I want to be able to stand and all day without pain in my knees or back," shares Ciera. "I want to do the thing
      I love with ease because I can and because I’m fit and healthy and have energy."
    </p>
    <p>
      Now 100 pounds* lighter, nearly half her size and named second-place winner in the women 18-39 age category of the Challenge,
      Ciera is enjoying life without the restriction of her bodysuit and even helping her friends to change their own eating
      habits.
    </p>
    <p>
      "I am free from the pressure of the suit and feeling bad about myself. No more hiding," says Ciera. "I’m glad I made these
      changes early so that I can experience everything to the fullest. I want to have kids someday and be a good mother
      and a healthy one. I want to be an example to other people and tell them that if they believe they can do it, they
      absolutely can."
    </p>
    <h3>Ciera’s Success Tips</h3>
    <ul>
      <li>Make a commitment to do it. If you mess up one day and eat something that isn’t good for you, just keep going and
        don’t give up.</li>
      <li>Purchase a pair of jeans you want to fit into and leave them in an area where you’ll see them every day. They’ll
        help keep you motivated every time you try them on.</li>
      <li>Cut processed and surgary foods from your diet because they’ll only drag you down.</li>
      <li>Have a strong support system of friends and family who can encourage you, especially on difficult days.</li>
      <li>Don’t let pressure to eat out with your friends or others keep you from reaching your goals. Learn to say "no" and
        modify your plans so they don’t revolve around food.</li>
      <li>Set mini-goals for yourself along the way rather than thinking about the "big picture" of what you want to lose.</li>
    </ul>
    <h3>Ciera’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Vanilla</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getDerrekSSuccessStory(): string {
    return `<h3>Derrek Transforms From "Big D" to "Slim D"</h3>
    <p>
      High school can be tough enough, but being overweight certainly didn’t help Derrek avoid the harsh words of classmates. Known
      as "Big D," he avoided school functions and preferred spending time at home playing video games and downing soda
      and unhealthy snacks.
    </p>
    <p>
      By the middle of his senior year, Derrek was ready for a lifestyle change. With college in the near future and hopes of pursuing
      a career in nursing, he realized he needed to focus on his health before he could help others.
    </p>
    <p>
      Derrek started following an Isagenix® system in February 2008 and says it was "so easy to do." Shortly after, he decided
      to sign up for the 2008 IsaBody Challenge® and began changing his unhealthy habits. He cut back on his couch potato
      time with his video games and started exercising regularly. He gave up drinking soda and his candy addiction and
      even quit snacking late night.
    </p>
    <p>
      Incredibly, Derrek lost 123 pounds and 41 percent body fat during his quest to better health* and was named the Challenge
      first-place winner in the men’s age 18-39 category. "Isagenix has allowed me to enjoy activities that I never got
      to do before," shares 18-year-old Derrek. "I feel like I’m discovering life for the first time." Not only did he
      start playing golf and wakeboarding but is also enjoying finally being able to shop at trendy stores since dropping
      10 pant sizes.*
    </p>
    <p>
      His new look is even catching the attention of the ladies. "I basically went from dateless to having the courage to talk
      to girls now," admits Derrek, who says he enjoys the attention he now gets from others. Now he is getting ready to
      start college in the fall and is even working two jobs. He recently earned a new nickname in place of his old one.
      Dubbed "Slim D" by his friends, he says he never wants to go back to the way he was before he discovered Isagenix.
    </p>
    <h3>Derrek’s Success Tips</h3>
    <ul>
      <li>Try the Cleansing and Fat Burning System: 9-day supply first, then move into the 30-Day.</li>
      <li>Enjoy IsaDelight™ on Cleanse Days. They make the day go by faster.</li>
    </ul>
    <h3>Derrek’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in French Vanilla mixed with a fresh banana and strawberries</li>
      <li>IsaDelight®</li>
      <li>Isagenix Snacks!™</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }

  private getElaineGSuccessStory(): string {
    return `<h3>Elaine Lets Go of Her "Protective Device"</h3>
    <p>
      Elaine turned to food for comfort to shield her from the health, relationship and emotional challenges she faced in life.
      She had low self-esteem that started from a very young age when she was abused, and continued throughout her adulthood.
      Years of overeating bolstered her weight and layers of fat she referred to as her "protective device."
    </p>
    <p>
      "Food was my friend who didn’t judge me by my house, clothes, car or intelligence," shares 55-year-old Elaine of Ohio. "Eating
      and being overweight was a way of keeping people at a distance."
    </p>
    <p>
      There were times Elaine turned her back on her "friend" and tried several fad diets, but she would only lose some weight
      and then gain it back again. The same thing happened with her initial experience with Isagenix® until she heard about
      the 2008 IsaBody Challenge® and turned to her cleansing coach, Mary Jane Kruse for support and motivation.
    </p>
    <p>
      "My coach inspired me, listened to me and helped me through every step of the way," says Elaine, the third-place winner of
      the 2008 IsaBody Challenge® women’s age 40-59 category. "She believed in me and that made me keep going."
    </p>
    <p>
      Elaine lost 60 pounds, 35 inches and 10 dress sizes* during the Challenge and developed a healthy lifestyle that includes
      Isagenix, balanced meals and regular exercise. While she once became breathless just climbing a flight of stairs,
      she now has the energy to chase her five grandchildren. She recently attended a wedding and spent all evening out
      on the dance floor.
    </p>
    <p>
      "I used to feel like a second-class citizen and that I just faded into the background," explains Elaine, who has found more
      self-confidence. "Now people notice me and treat me differently and my perception of myself has changed along with
      it."
    </p>
    <p>
      Elaine is now creating a healthy future, which not only includes being slim and trim, but happy and secure. She is starting
      to build her Isagenix business so she can help others and create more financial freedom for herself. Her goals include
      becoming a member of the Isagenix 100-Pound Club.
    </p>
    <p>
      "I used to do what I had to do just to get it done, but now I know I can do it all," shares Elaine. "I’m not just going through
      the motions — I’m enjoying life."
    </p>
    <h3>Elaine’s Success Tips</h3>
    <ul>
      <li>Create positive affirmations, write them down and read them daily.</li>
      <li>Reward yourself and others along the way. My cleanse coach sent me flowers after I reached one of my goals and it
        reaffirmed my commitment.</li>
      <li>Turn negative thoughts into positive ones or they will hold you back.</li>
      <li>Develop a rhythm and stick with it. Be consistent.</li>
      <li>If you fall off course don’t give up or sabotage your efforts; just get back on track.</li>
    </ul>
    <h3>Elaine’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>IsaCalcium®</li>
      <li>IsaFruits® and Isagenix Greens!™ added to IsaLean® Shakes</li>
    </ul>`;
  }

  private getGaryMSuccessStory(): string {
    return `<h3>More Energy Gets Gary Back on the Bike</h3>
    <p>
      For more than 50 years, Gary had forgotten about his childhood love of biking. His last ride had been across the fairytale
      landscape of Holland with his youth group. But, after trying Isagenix® and regaining his youthful energy at age 63,
      he returned to his favorite pastime and is now riding more than 100 miles a week. "I started biking again because
      I needed to burn the extra energy I had from using Isagenix," recalls Gary of Utah. "I find now that almost every
      day I can pedal the bike a little faster and a little farther."
    </p>
    <p>
      He hardly misses his bike rides every morning or his IsaLean® Shakes blended with half of a banana. It’s what has helped
      him maintain a healthy lifestyle and keep off the 48 pounds* he’s lost since starting Isagenix about a year ago.
      Since then, he’s received many compliments and even questions from curious colleagues at the private school where
      he works as a math teacher for at-risk teens. Inspired by his own health success, several other faculty members have
      signed up to try the products and also experienced great success.
    </p>
    <p>
      It’s one of the main ways he has built his Isagenix business. Another way was through the 2008 IsaBody Challenge®. He encouraged
      his team members to sign up and says he felt compelled to do the same, even though he didn’t have much to lose. "Kathy
      Coover always says that Isagenix is not a weight-loss program, but a way to improve your overall health and wellness,"
      says Gary. "I thought I might as well prove it. I also wanted to set an example for my team."
    </p>
    <p>
      Little did he know that he would be chosen as third-place winner in the men’s 60+ age category of the Challenge after losing
      eight pounds and dropping his body fat from 28 percent to 20 percent.* Now, his increased energy not only has him
      riding his bike for pleasure, but he’s also entering cycling competitions. Still, he wants to keep striving for even
      better fitness and motivate others to find greater health the way he has.
    </p>
    <p>
      "I raced in a competition recently where there were 75-year-old men in my age group," shares Gary. "When you’re riding along
      at 20 mph and you have a 75-year-old pass you, it tells you that you can do better and you have to keep going. I
      want others to couple cycling with Isagenix the way I have so they can get fitter and feel better."
    </p>
    <h3>Gary’s Success Tips</h3>
    <ul>
      <li>Try all of the products and don’t give up on them if you have a hard time at first with the taste. As you improve
        your nutrition, the flavors will taste different.</li>
      <li>Stay away from soda, refined sugar and processed foods. Fill up on fruits, vegetables and Isagenix® products.</li>
      <li>Incorporate IsaDelight® on your Cleanse Days — it makes cleansing so much easier.</li>
      <li>If you’re hungry on Cleanse Days, you should have a little something. A small handful of almonds can often do the
        trick.</li>
      <li>Exercise regularly, drink lots of water and always have low-calorie snack foods on hand. Stick with the system and
        stay committed.</li>
    </ul>
    <h3>Gary’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>Amped Hydrate® in Orange</li>
      <li>Essentials for Men™</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getJessBSuccessStory(): string {
    return `<h3>Jess Bypasses Weight-Loss Surgery and Discovers Isagenix®</h3>
    <p>
      Before discovering Isagenix® a few years ago, 67-year-old Jess was more than 300 pounds and on the brink of scheduling gastric
      bypass surgery. His doctor worried about his increasingly poor health and felt that surgery was Jess’ last option
      after several dieting attempts had failed to produce results.
    </p>
    <p>
      Luckily, a chance meeting with a friend in his Oregon town changed everything. His good friend, nicknamed "Big Jerry" for
      his robust profile, suddenly had shrunk by more than 100 pounds.* Jerry, not quite living up to his nickname anymore,
      handed Jess his Isagenix business card and went on his way. After careful consideration, Jess decided to give Isagenix
      a try. Within just a few months, he noticed amazing results and his doctor even took him off the list for gastric
      bypass surgery. Though he’d lost more than 50 pounds* initially, the former police officer decided to take his weight-loss
      and health efforts to the next level and entered the 2008 IsaBody Challenge™.
    </p>
    <p>
      "Isagenix has allowed me to defeat the yo-yo effect of many other diet programs that failed me in the past," says Jess. "This
      is the only thing that I’ve found that helped me to feel like I did when I was 30 years younger. My body has become
      the miracle God intended it to be, thanks to Isagenix."
    </p>
    <p>
      Chosen as second-place winner in the men 60+ age category in the Challenge, Jess lost 32 pounds and dropped from a belt size
      42 to 38.* He’s grateful for the competition because it has helped him to be an example to others who may think that
      Isagenix is just another fad diet.
    </p>
    <p>
      "People ask me if I’m still using the products and I tell them that I’m on Isagenix for life," says Jess. "The Challenge
      really motivated me to be a good role model to other people who could benefit from the products like I have." A family
      history of health challenges and obesity, Jess says his wife has lost 70 pounds* and his daughters have successfully
      lost weight and improved their health with Isagenix, too. He still wishes he had been able to share Isagenix with
      some of the members of his family years ago when they were suffering from health problems and passed away.
    </p>
    <p>
      "I used to be a couch potato and would just eat and sleep before Isagenix helped me to create a completely new and active
      lifestyle," shares Jess, choking up. "There’s no way I will ever go back to the way I was. I’m proof that it’s never
      too late to change your life."
    </p>
    <h3>Jess’ Success Tips</h3>
    <ul>
      <li>Find support and a partner to follow the systems with you. You’ll keep each other motivated.</li>
      <li>Just try the products for 30 days—you have nothing to lose, but some weight.</li>
      <li>Try adding a little bit of seasonal fresh fruit to your daily IsaLean® Shake to give your routine some variety and
        a little extra flavor.</li>
      <li>Remember that it’s not a diet; it’s about changing your lifestyle and improving your health.</li>
    </ul>
    <h3>Jess’ Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>IsaLean® Shakes</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>IsaLean® Bars in Yogurt Dipped Oatmeal Raisin</li>
    </ul>`;
  }

  private getJoeBSuccessStory(): string {
    return `<h3>Joe Reclaims His Life and Youth Through IsaBody Challenge®</h3>
    <p>
      Joe had no knowledge of Isagenix® when he stepped through the doors of a New Jersey hotel to attend an Isagenix University.
      Convinced by his chiropractor son to check out the company and its products, Joe reluctantly went along for the ride.
      Little did he know that by the end of the first day he would commit to changing his life forever through the 2008
      IsaBody Challenge®.
    </p>
    <p>
      "I was inspired by the top leaders," recalls 61-year-old Joe. "Everything just hit me and after I heard about the Challenge,
      I turned to the guy next to me and said I was going to participate and win my age group." Though typically a humble
      person, Joe felt compelled to tell everyone at the event about his new goal, even though the only product he’d ever
      tried was Ionix® Supreme which was that day. At 232 pounds* and having struggled with numerous back injuries that
      kept him from being active, Joe was determined to reclaim his life and get back into the jeans he’d worn nearly two
      decades earlier.
    </p>
    <p>
      Through weekly cleansing and his daily IsaLean® Shakes, he felt more energetic and slowly incorporated strength training
      into his daily walking routine. Soon, he was 49 pounds lighter and leaner with only 15 percent body fat.* While he
      had committed to losing weight and boosting his health through the Challenge, he never forgot the words that popped
      out of his mouth during Isagenix University. On the days he struggled, his vow to win his age group echoed in his
      ears and he pushed himself further. Still, it was a shock when he received the phone call that he had been chosen
      as a Challenge top finalist and then ultimately, the first-place winner in the men’s 60+ age category.
    </p>
    <p>
      "It’s like I’m walking on air and feel like I am on top of the world right now," shares Joe. "For so long it felt like I
      would take one step forward toward better health only to take two steps back again. People see that I’m a different
      person now." His son recently commented to his mother that "We’ve got the old Dad back." Though it took a while to
      find the solution, Joe says he’s cherishing every moment of his newfound life. His wife even lost 30 pounds* and
      is back to looking like she did when they got married 35 years ago. "The outward appearance is just the tip of the
      iceberg," says Joe. "Isagenix is a gift and I want to share it with others and be a role model to prove that anything
      is possible."
    </p>
    <h3>Joe’s Success Tips</h3>
    <ul>
      <li>Don’t procrastinate. Shake those negative feelings and push even harder by spending more time exercising or eating
        healthier.</li>
      <li>If you hit a weight-loss plateau, work a little harder during your exercise routine.</li>
      <li>For extra energy before your workout in the morning, take Ionix® Supreme when you first wake up and then have your
        IsaLean® Shake after your workout.</li>
    </ul>
    <h3>Joe’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Isagenix Greens!™</li>
      <li>IsaDermix® skincare products</li>
      <li>IsaOmega Supreme®</li>
    </ul>`;
  }

  private getLindaOSuccessStory(): string {
    return `<h3>Life Sends Linda Message of Love and Health</h3>
    <p>
      Linda discovered two amazing gifts later in life — love and health. After over three decades apart, she reunited with her
      childhood love and married him at age 46. Shortly after, she discovered Isagenix® through the 2008 IsaBody Challenge®
      and lost 65 pounds*, discovering a new love for herself and for life. Linda had tried every weight-loss program imaginable
      from Weight Watchers to the Cabbage Soup Diet, but only experienced short-term success. Her weekend ritual only added
      to her problem. While hitting Market Street in Lubbock, Texas for a breakfast burrito, a sweet treat like an éclair
      and then grocery shopping, her bad habits would often get the best of her and she’d return home with lots of snacks,
      making her cupboard look like a full-fledged candy aisle.
    </p>
    <p>
      When her hairstylist introduced her to Isagenix, everything seemed to fall into place and the timing was just right. Days
      earlier she had stopped herself in line at a plus-size women’s clothing store wondering how she had ever allowed
      herself to get there. She knew she needed to make a change and had the support and encouragement of her husband to
      try something new.
    </p>
    <p>
      "I felt no self-worth and was ashamed of how I looked," shares Linda. "I was exhausted and too embarrassed to go out." She
      followed an Isagenix system, began losing weight and even began sleeping in her own bed again after two years of
      using a reclining couch. Her increased energy allowed her to focus on hobbies with her husband such as restoring
      classic cars. "I am full of life and enjoying every minute of the ride," says Linda. "Thank goodness I discovered
      Isagenix. It saved my life."
    </p>
    <p>
      Linda not only lost 66 pounds and 97 inches, but shrunk from a size 22 to an 8* and was awarded second place in the 2008
      IsaBody Challenge® women’s age 40-59 category. She also developed healthier eating habits and managed her food cravings,
      including abandoning her love of Diet Coke. She replaced her daily chocolate addiction with two nutritious options:
      IsaLean® Shakes in Rich Chocolate and IsaDelight®. Her success motivated her husband Frankie to even try Isagenix
      and he has lost 55 pounds.* Surprisingly, their lifestyle changes impacted the smallest member of their family.
    </p>
    <p>
      Their dog Brook Lynn lost 30 pounds simply from not getting table scraps or leftovers like she was used to. Even though Linda
      was adamant about not getting involved in the Isagenix business opportunity, she couldn’t help but share her story
      and has now become a Crystal Executive. She refers to herself as the "mother hen" and her team as the "chicklets."
      She focuses on providing support to help them reclaim their lives and bodies. "Every day is Christmas and every night
      is New Year’s Eve," quotes Linda from one of her favorite songs. "Every day is a gift and we live it as such and
      celebrate every moment of it." Since the Challenge, Linda has lost a total of 77 pounds and 109 inches* by staying
      committed to her new lifestyle and Isagenix.
    </p>
    <h3>Linda’s Success Tips</h3>
    <ul>
      <li>Don’t look at the overall picture or you will get overwhelmed. Set smaller monthly goals and reach for them.</li>
      <li>Recognize the crutches you or others may use that serve as stumbling blocks to your success. Excuses like lack of
        time, the expense of the products and many others will just get in the way.</li>
      <li>When you get an urge to eat a snack or treat, brush your teeth to get rid of the craving.</li>
      <li>Keep yourself busy on Cleanse Days. Watch your favorite TV show and snack on a few almonds to keep your mind off
        of food and cleansing. Get a manicure or pedicure to relax you.</li>
      <li>Make your meal decisions healthy ones. If you still enjoy eating out, find the healthiest options on the menu.</li>
    </ul>
    <h3>Linda’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Rich Chocolate</li>
      <li>IsaDelight®, which help to satisfy her chocolate cravings</li>
    </ul>`;
  }

  private getLyndsayAndCorySSuccessStory(): string {
    return ` <h3>Couple’s Love Begins and Continues With Isagenix®</h3>
    <p>
      When Cory met Lyndsay, their first date revolved around his passion for Isagenix® and how the products had changed him. Not
      only had he lost more than 60 pounds,* but four months later he gained another believer when Lyndsay began her first
      cleanse. From there, their romance blossomed. Fast forward three years and you’re likely to still hear the pair singing
      the praises of Isagenix, especially since being recognized as top finalists in the 2008 IsaBody Challenge®.
    </p>
    <p>
      "Signing up for the Challenge helped us to recommit to the products and maintain our weight," explains Lyndsay, a part-time
      waitress in British Columbia. "Before, we would do a Cleanse Day, lose weight, then gain it back and start all over
      again because we didn’t change our habits. Now we have our IsaLean® Shakes twice a day and make healthier choices."
      Their kitchen cupboard is stocked with "every Isagenix product available," and Lyndsay says she receives plenty of
      funny looks from people when they tell them about their family’s new way of life. Since she first started using Isagenix,
      Lyndsay has lost nearly 100 pounds* and kept it off.
    </p>
    <p>
      During the Challenge alone, she lost 26 pounds and Cory, a construction worker, lost 30 pounds.* But, for them, their biggest
      accomplishment is how they’ve changed their lives for their 18-month-old son. Now, instead of lying on the couch
      after they get home from work, the couple takes their dog and son down to the river to enjoy the weather and the
      fresh air. They ride their bikes together, go camping together and play baseball together on a team.
    </p>
    <p>
      Lyndsay is even taking belly dancing classes during the week. Not only does the couple want to take their health to new heights,
      but they’re also now more determined than ever to build their Isagenix business. "We will be financially-free so
      we don’t have to go to work," shares Lyndsay. "We want to be able to stay home and raise our kids. Isagenix is our
      key to getting there."
    </p>
    <h3>Cory and Lyndsay’s Success Tips</h3>
    <ul>
      <li>Start with daily IsaLean® Shakes. They’re exactly what your body needs, especially when you’re busy and don’t have
        time to make breakfast in the morning.</li>
      <li>Take Isamune® daily to keep your immune system strong and to stave off colds.</li>
      <li>Exercise regularly. The more you do it, the better you’ll feel.</li>
      <li>Do something for yourself that makes you happy and healthy.</li>
      <li>Find someone to partner with and do things together. If you do the systems with someone else you can push each other
        along.</li>
    </ul>
    <h3>Cory and Lyndsay’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes in Chocolate</li>
      <li>IsaPro®</li>
      <li>IsaFruits®</li>
      <li>Ionix® Supreme</li>
      <li>IsaDelight®</li>
      <li>Isamune®</li>
    </ul>`;
  }

  private getMaryPSuccessStory(): string {
    return `<h3>Mary Takes Leap of Faith and Discovers Greater Health and Wealth</h3>
    <p>
      If anyone had told 60-year-old Mary a few years ago that she would ever enjoy exercise or that she would feel better today
      than she did when she was 30, she would have said they were nuts. Now this proud Texas native happily eats those
      words, saying there is only one word that can describe how she feels today — "passionate." Armed with her distinctly
      positive outlook on life, Mary is on a mission to tell all who will listen about her story of health and wellness
      and the power of Isagenix® to truly transform lives and produce financial freedom. It wasn’t always sunshine and
      roses, though.
    </p>
    <p>
      Mary sheepishly admits to being cranky and skeptical when she was first approached about Isagenix as a business. Her response
      was a defiant "not on your life." Eventually the stars aligned and Mary set aside her skepticism and took a leap
      of faith, deciding it was worth a shot. She had just handed over her salon business to her daughter after spending
      22 years building it, so the timing was just right to try something new.
    </p>
    <p>
      It wasn’t long before she saw the benefits of Isagenix products, understood the unique mission of the company and the lasting
      impact it was having on people’s lives worldwide. She quickly climbed the ranks, reaching 4-Star Golden Circle, 2
      Star Crystal Executive status and was even honored with one of the 2007 Women of Isagenix awards. What she remembers
      most clearly though was when "the gauntlet was tossed" at 2008 Top Achievers to lead by example and enter the 2008
      IsaBody Challenge®. Almost reluctantly, she did.
    </p>
    <p>
      What most people didn’t know was that while Mary was relatively healthy and a rising star in the company, she suffered from
      a lifelong health issue that prevented her from exercising, participating in sports and even just a fun night on
      the town dancing. Not one to go back on her word and wanting to be a role model for her team members, the feisty
      Texan vowed that her health issues were not going to hold her back any longer. With great trepidation and apprehension,
      she found a certified personal trainer and began her journey.
    </p>
    <p>
      By the end of the Challenge, Mary was thrilled and amazed to say goodbye to 9.5 inches* and hello to a newly tightened and
      toned body. She went from doing a light 10 minutes on the treadmill to a challenging 40 minutes, plus weight training.
    </p>
    <p>
      "I feel better than I have in my entire life, and I’m 60," shares Mary. "It’s exhilarating." Today, she shares her story
      and proudly promotes Isagenix on the back windshield of her car. She wants to inspire her team as a leader and coach.
      "I want my team members to experience the health, wealth and freedom I’ve experienced," she shares. "I want them
      to climb straight to the top."
    </p>
    <p>
      Mary sticks faithfully to the routine that made her a third-place winner in the Women 60+ category of the Challenge, starting
      each day with an IsaLean® Shake and Ionix® Supreme, cleansing one day each month and getting plenty of exercise.
      "It took me a while to come around, but when something changes in your life,you want to share it with the world,"
      explains Mary. "When a very skeptical person experiences good results, you’ll have a fanatic on your hands, but why
      not? These products are amazing."
    </p>
    <h3>Mary’s Success Tips</h3>
    <ul>
      <li>Follow the system and it will work.</li>
      <li>Trust your coach. They’ve been though the same thing.</li>
      <li>If you’re hungry on a Cleanse Day, don’t give up. Eat something little. Better to snack and complete the cleanse
        than to give up.</li>
      <li>Taking your measurements is vital. Measure everything you’re encouraged to measure so you can track your progress.</li>
      <li>Attend Isagenix® events to build your business. Just connect with people by sharing your story. Never walk out the
        door without a few brochures in your briefcase or purse.</li>
    </ul>
    <h3>Mary’s Favorite Products</h3>
    <ul>
      <li>IsaFruits®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getMattCSuccessStory(): string {
    return `<h3>Matt Rediscovers His Ability to Dream With Isagenix®</h3>
    <p>
      Matt’s 10-year-old son is confined to a wheelchair and depends on him and others for help with everyday activities. Although
      33-year-old Matt is not in a wheelchair, he too knows what it’s like to be confined. Matt’s weight, which once tipped
      the scales at 410 pounds, prevented him from living or enjoying his life and dreaming of the future. One day as Matt
      struggled to carry his disabled son to bed, his son asked him, "Who’s going to carry me when you’re not around, Daddy?"
    </p>
    <p>
      Matt knew that it was time to create a healthier lifestyle or that day would come sooner than he wanted. "My weight was increasing,
      my depression consumed me and I felt so inadequate as a dad and a husband," shares Matt, who spent most of his day
      on the couch. "I finally realized that people do depend on me and I needed to do something." Although skeptical at
      first, that "something" was Isagenix®. Matt tried several weight-loss programs, but the support he received from
      his team is what made all the difference in his resulting success.
    </p>
    <p>
      "I needed someone to believe in me before I could believe in myself," says Matt, who lost 141 pounds and 20 percent body
      fat* during the 2008 IsaBody Challenge® and was named the second-place winner in the men’s age 18-39 category. "I
      didn’t feel like I was alone, I wasn’t intimidated to get started and just jumped in and followed the system."
    </p>
    <p>
      The IsaBody Challenge was an extra incentive not only for the prize money, which will help him purchase a wheelchair-accessible
      van for his son, but also to get the family involved in the process. They helped him to start exercising, which evolved
      from getting off the couch and walking to the mailbox to now walking on a treadmill daily. Matt is even able to play
      sports with his kids and participate in the daily activities that his weight had sidelined him from for years.
    </p>
    <p>
      "Isagenix gave me back the ability to dream and feel alive," shares Matt, who lost more than 200 pounds and dropped from
      a size 58 waist to a 40* since he started Isagenix. He is also new a member of the Isagenix 200-Pound Club. Now he
      dreams of the future and plans to build his Isagenix business and share his success to help others realize their
      own dreams. He hopes to one day fulfill his lifelong dream of becoming a body builder, which he now believes he can
      achieve.
    </p>
    <h3>Matt’s Success Tips</h3>
    <ul>
      <li>Take advantage of the support tools that are available within your team and through Isagenix®.</li>
      <li>Stay connected to your team and upline and build relationships.</li>
      <li>Exercise, be consistent with it and have fun doing it. You can still watch the baseball game, but do it from a treadmill
        at the gym or at home.</li>
      <li>Stick to the program, but realize it’s okay to reward yourself every once in a while.</li>
      <li>Write your dreams down and believe in them. No one can make you feel bad about yourself unless you let them.</li>
    </ul>
    <h3>Matt’s Favorite Products</h3>
    <ul>
      <li>IsaPro®, which he adds to all of his IsaLean® Shakes.</li>
      <li>Ionix® Supreme, the one product he cannot live without.</li>
      <li>IsaLean® Bars, which are his wife’s favorite.</li>
      <li>IsaKids® Essentials, which his kids ask for every day.</li>
    </ul>`;
  }

  private getMichellePSuccessStory(): string {
    return `<h3>Michelle Bids Farewell to Crash Diets</h3>
    <p>
      More than 10 years ago, Michelle embarked on a quick-fix weight-loss regimen with her mom to drop weight for her wedding.
      While she lost 80 pounds on the crash diet, she knew she had depleted her system of necessary vitamins and nutrients
      and soon turned back to food for comfort.
    </p>
    <p>
      Stress, a baby and a decade later, Michelle struggled with a 100-pound weight gain and self-described addiction to fast food
      and simple sugar. She had nearly given up on losing weight until her sister introduced her to Isagenix®. "I knew
      I was going to make a lifestyle change with Isagenix," shares 39-year-old Michelle from Washington. "And then I came
      across the IsaBody Challenge® around the same time and thought it might help keep me motivated."
    </p>
    <p>
      Now 71 pounds* lighter and eight dress sizes smaller, Michelle is basking in the afterglow of successfully completing the
      Challenge and being recognized as third-place winner in the women 18-39 age category as well. Though she still aims
      to lose another 20 pounds, she’s amazed by how her habits have changed since adopting an Isagenix lifestyle of Nutritional
      Cleansing. Michelle is more active than ever before and her self-esteem has skyrocketed. She knows her new, positive
      attitude has changed her marriage for the better and helped her to become a more "joyful" mother and wife.
    </p>
    <p>
      Michelle looks forward to sharing her story and Isagenix with others to help people realize that Isagenix can change their
      lives, too. But the best part of her success is likely the fact that she and her mother motivated each other every
      step of the way and discovered that Isagenix is the healthy, balanced way to lose weight successfully.
    </p>
    <p>
      "We’ve both lost a significant amount of weight and will be lifetime Isagenix users," says Michelle. "We feel healthier than
      ever before— no more starvation diets for us."
    </p>
    <h3>Michelle’s Success Tips</h3>
    <ul>
      <li>Have a support system. Whether it’s a family member or a wellness coach, enlist someone to help you through the tough
        days and keep you motivated when you’re struggling.</li>
      <li>Give yourself some grace. If you eat something bad one day, pick yourself back up and eat better the next day.</li>
      <li>Get moving. Try to incorporate more exercise into your routine, even if it’s walking a few times a week. It will
        make a big difference.</li>
      <li>Measure yourself before you start Isagenix® and do it again every few days. If you hit a weight-loss plateau, you
        will probably find that you’ve still lost inches.</li>
      <li>Stick to whole foods in your diet. It’s part of the lifestyle change so you can maintain healthy habits.</li>
    </ul>
    <h3>Michelle’s Favorite Products</h3>
    <ul>
      <li>Isamune®</li>
      <li>IsaLean® Shakes</li>
      <li>Isagenix Greens!™</li>
      <li>IsaFruits®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getMikeWSuccessStory(): string {
    return `<h3>Mike Transforms into Walking Billboard for Greater Health</h3>
    <p>
      Health and wellness had never been an issue for Mike who started the first ATV club in British Columbia in 1998. An avid
      outdoorsman, camper and weight lifter, Mike always had a passion for living an active, healthy lifestyle. All of
      that began to change when he took on the role of sole caretaker for his terminally ill mother. Concerned only for
      her well-being, Mike’s healthy habits quickly took a backseat and he started gaining weight and encountering significant
      health challenges. The eventual loss of his mother brought Mike to a fork in the road that was, in his words, truly
      one of life or death.
    </p>
    <p>
      For the next several years, he felt lost, hopeless and alone. Frustrated with unsuccessful attempts to shed the weight and
      manage his health challenges, the 49-year-old who refused gastric bypass surgery was more than ready to make the
      change when a close friend introduced him to 2007 IsaBody Challenge® Grand Prize Winner Mark Macey. It was at that
      moment Mike decided to try Isagenix®, and soon after, he entered the 2008 Challenge.
    </p>
    <p>
      It wasn’t long before he felt his life begin to turn around as the weight and inches started disappearing. The serious health
      issues that had controlled his life for so long also started to disappear and were replaced with boundless energy
      and greater health that amazed even his doctors. Mike is proud to not only be a first-place winner in the Men’s 40-59
      category of the Challenge, but he recently filled seven garbage bags with clothes that no longer fit. He’s a walking
      billboard for health, having lost 138 pounds, 9 pant sizes and an amazing 125 inches* during the Challenge.
    </p>
    <p>
      Friends now call him the "incredible shrinking man." "Isagenix has taken me from being a depressed, broken man to a man filled
      with hope, gratitude and happiness with the wonderful life I’ve rediscovered," shares Mike. With a renewed passion
      for life, Mike has retuned to the wilderness and is camping, hiking and even riding ATVs again. Enjoying the great
      outdoors is a little different for him now though, and on a recent camping trip with friends, Mike did the unthinkable
      — he cleansed.
    </p>
    <p>
      "I finally found something that was working and I wasn’t going to mess it up," laughs Mike. "I want to be in control of my
      life and now that I’ve found Isagenix, not only am I in control, but it’s easy for me to stick to my healthy habits."
      When he found out that we won first place in the Challenge, Mike was excited, overwhelmed and at a loss for words.
      "Everyone is really happy for me and I appreciate this more than anything," he says. "I wanted so badly to make the
      finals. I wanted acknowledgement of my hard work and for my accomplishments. But most of all, I wanted to get my
      life back."
    </p>
    <h3>Mike’s Success Tips</h3>
    <ul>
      <li>Don’t be discouraged when you don’t see results overnight. Keep at it.</li>
      <li>Follow the system and take measurements when it says to measure.</li>
      <li>Drink lots of water and plan your meals in advance.</li>
      <li>Buys things like meat in bulk and wrap and freeze them individually so you can pull them out and enjoy the right
        portion size.</li>
    </ul>
    <h3>Mike’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>Amped Hydrate® in Orange</li>
    </ul>`;
  }

  private getRadhaBSuccessStory(): string {
    return `<h3>Radha Discovers New State of Mind, Finds Health and New Life</h3>
    <p>
      Radha remembers the day in 1967 when she first heard the Beatles song "When I’m Sixty-Four," and says she couldn’t imagine
      ever being that age. Flash forward several decades to her 64th birthday and she knows what it means to be that age
      all too well.
    </p>
    <p>
      Radha was 60 pounds overweight, unable to sleep, and had much discomfort in her body. She was a self-professed caffeine addict
      living life with a frown on her face, constantly worried about her health. It didn’t help that Radha also worked
      in the health and nutrition field, counseling others on weight loss and lifestyle changes. She felt frustrated, disingenuous
      and ashamed, and struggled with the fact that diets had not worked successfully for her, even the ones she recommended
      to her patients. She lacked energy and subsequently blew off exercising. "I felt terrible and old," shares Radha.
      "Life was not fun."
    </p>
    <p>
      Even more painful than the lie she felt she was living was watching her 5’6" son grow to 320 pounds. Radha felt helpless,
      heartbroken and powerless to do anything. A friend told her about Isagenix®, but Radha was skeptical. However, she
      wanted desperately to believe there was a ray of hope and attended an Isagenix event to learn more. It was there
      that Radha discovered Nutritional Cleansing and says she experienced "one of the biggest ‘a-ha’ moments" of her life,
      meeting Isagenix millionaire and 6 Star Golden Circle Peter G., and finally understanding the science and power behind
      Isagenix products.
    </p>
    <p>
      Radha started Isagenix and even signed up for the 2008 IsaBody Challenge®. Her strategy was to post signs in her home, car
      and office saying that she was the Challenge winner. She lived up to her words and with the power of positive thinking
      on her side, Radha is 20 pounds lighter, two dress sizes smaller,* and a first-place winner in the Women 60+ category
      of the Challenge.
    </p>
    <p>
      "I feel great," says Radha. "So many top leaders encouraged me, and reached out to support me. An incredible change happened
      when Peter G. taught me how to cleanse correctly, and (last year’s winners) Mark M. and Donna O. inspired me. Now
      I can help assist many people in achieving their goals and dreams no matter their age or condition." Waking from
      a full night’s sleep with a smile on her face, Radha now has more than enough energy to exercise. She maintains her
      newfound health by sticking to the system and a workout routine consisting of weight training, and 45 minutes of
      cardio 5-6 days a week.
    </p>
    <p>
      Radha has also started to share her Isagenix journey with many people she meets, hoping to inspire others. "It’s extraordinary,"
      says Radha. "With Isagenix, our bodies can release impurities while our cells are being provided with the nutritients
      they need." Her greatest inspiration has been her 33-year-old son, who watched her results and started Isagenix himself.
      Having already dropped 50 pounds,* he thanked her by saying, "you not only gave me life — you saved my life by giving
      me Isagenix."
    </p>
    <p>
      Today when Radha listens to the Beatles song about turning 64, she smiles knowing she can look forward to the years ahead
      with integrity and knowing that she can maintain her health. "Best of all," shares Radha happily. "At last I can
      truly be of service to others by helping them do the same." "I transformed from someone who thought her life was
      over into a woman with the ability to inspire and empower others to be so much more than they ever thought they could
      be."
    </p>
    <h3>Radha’s Success Tips</h3>
    <ul>
      <li>Work with a cleanse coach, especially when starting the program.</li>
      <li>Weigh and measure yourself when you start and understand that everyone’s results are different. Some will lose more
        inches than pounds.</li>
      <li>Identify challenges and work with your coach to find a solution. As Jimmy Smith says, "You cannot fail if you don’t
        give up."</li>
      <li>If you need to have something extra on Cleanse Days, eat a very small, healthy snack (such as pine nuts or almonds)
        but don’t give up.</li>
      <li>Stay informed by listening to team calls, attending Isagenix® events, trainings, and tuning into Webinars. They are
        goldmines for support and inspiration.</li>
      <li>Read inspirational books daily and listen to training CDs in your car.</li>
      <li>Surround yourself with supportive people.</li>
      <li>Get to know your team, and ask them to hold you accountable.</li>
    </ul>
    <h3>Radha’s Favorite Products</h3>
    <ul>
      <li>IsaDermix® Skin Renewal System</li>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes</li>
      <li>Amped Hydrate® in Orange</li>
      <li>IsaDelight®</li>
      <li>Isamune®</li>
    </ul>`;
  }

}
