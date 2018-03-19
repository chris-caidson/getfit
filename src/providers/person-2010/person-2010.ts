import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2010Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "brian-r": htmlString = this.getBrianRSuccessStory(); break;
      case "eric-f": htmlString = this.getEricFSuccessStory(); break;
      case "geri-n": htmlString = this.getGeriNSuccessStory(); break;
      case "greg-and-loriann-w": htmlString = this.getGregAndLoriannWSuccessStory(); break;
      case "harley-d": htmlString = this.getHarleyDSuccessStory(); break;
      case "holly-d": htmlString = this.getHollyDSuccessStory(); break;
      case "james-p": htmlString = this.getJamesPSuccessStory(); break;
      case "jean-f": htmlString = this.getJeanFSuccessStory(); break;
      case "mary-a": htmlString = this.getMaryASuccessStory(); break;
      case "melanie-s": htmlString = this.getMelanieSSuccessStory(); break;
      case "mercedes-r": htmlString = this.getMercedesRSuccessStory(); break;
      case "michael-o": htmlString = this.getMichaelOSuccessStory(); break;
      case "michael-w": htmlString = this.getMichaelWSuccessStory(); break;
      case "oralia-a": htmlString = this.getOraliaASuccessStory(); break;
      case "patrick-d": htmlString = this.getPatrickDSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getBrianRSuccessStory(): string {
    return `<h3>Sandwich Shop Manager Subs Sedentary Life For Cycling</h3>
    <p>
      Even after watching four family members experience dramatic health and weight-loss results with Isagenix®, Brian wasn’t convinced
      it would work for him. But, at 371 pounds, his family was concerned about his health and literally cornered him and
      forced him to sign up by putting his fingers on the keyboard.
    </p>
    <p>
      "I was such a doubting Thomas," laughs Brian of Alberta. "I was just ignoring it all and thinking ‘ya, I’ll prove this wrong
      and I’ll gain weight.’"
    </p>
    <p>
      Fortunately for Brian, he’d have to eat crow on that one, but with his recent history with food, stress and seclusion, it’s
      not difficult to understand why he’d felt that way.
    </p>
    <p>
      Emotionally distraught over the dissolution of his 31-year marriage and already overweight, Brian turned to eating and a
      sedentary lifestyle to get through the pain. The manager of three franchised sandwich shops, the pressure of maintaining
      the businesses on top of his personal heartbreak began to weigh on him. He removed himself from family memories and
      even gave up his love for golf all because he didn’t want anyone to look at him.
    </p>
    <p>
      "I was creating my own little world," Brian confesses. "I was withdrawing and certainly heading down a dark path."
    </p>
    <p>
      That’s when fate stepped in and his family put his fingers to the computer keyboard at Christmas time, making him order a
      30-Day Cleansing and Fat Burning System.
    </p>
    <p>
      Following the 30-Day System’s guide to the letter and leaning on his sisters for support, Brian soon found himself 60 pounds
      lighter* and had conquered his fear of exercising due to his size.
    </p>
    <p>
      To take things a step further, he signed up for the 2010 IsaBody Challenge® and soon, he was a new 100-Pound Club Member.
      His energy through the roof, Brian was sporting new found confidence and knew he wanted to learn more about the incredible
      products that were transforming his body and his life.
    </p>
    <p>
      He decided to attend an Isagenix University near him in Alberta soon after and says he truly had a light bulb moment at the
      event.
    </p>
    <p>
      "I really got a shot of encouragement there because at the end of the conference I got a standing ovation for five minutes
      and about 200 hugs," shares Brian.
    </p>
    <p>
      Now 140 pounds lighter and 10 pant sizes smaller,* the 1st-place winner in the Men 50+ Category of the Challenge says he’s
      loving his new, active lifestyle.
    </p>
    <p>
      "For the first time in 30 years, I’m waking up before my alarm in the morning and ready to exercise right after I get out
      of bed," says Brian.
    </p>
    <p>
      He’s even planning to train for a 700-mile bicycle trip with a triathlete friend of his that spans from central Alberta to
      Vancouver Island and he’s rediscovered his passion for the pastime he gave up because of his size: golf.
    </p>
    <p>
      "I’m not intimidated to be out there anymore and I’m not encumbered anymore by my weight," says Brian. "I feel like a common
      person again, just out to hit the ball around and enjoy myself."
    </p>
    <p>
      Despite his inspiring accomplishments, Brian says his biggest achievement comes from being able to share Isagenix with others.
    </p>
    <p>
      "People notice that I’ve lost weight, but they also comment about my attitude and say they can tell my emotions are in check,"
      shares Brian. "The best reward of Isagenix is being able to help others do this, too."
    </p>
    <h3>Brian’s Tips For Success</h3>
    <ul>
      <li>Find the routine with Isagenix® products that fits into your lifestyle.</li>
      <li>Be very consistent and persistent. Follow the 30-Day System’s instructions.</li>
      <li>Combine Isagenix products with regular exercise; you won’t believe the results. It will also help you understand
        the physical capabilities you have.</li>
      <li>Do a gradual increase in your exercise and when you can, exercise twice a day.</li>
    </ul>
    <h3>Brian’s Favorite Products</h3>
    <ul>
      <li>30-Day Cleansing and Fat Burning System</li>
      <li>IsaFruits®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getEricFSuccessStory(): string {
    return `<h3>How One Boy’s Athletic Dreams Came True</h3>
    <p>
      In high school, Eric’s greatest desire was to play for the school’s basketball team. Although his heart and mind were committed,
      Eric’s 220-pound body held him back and the sports fanatic was relegated to the bench as the stat manager. Heartbroken,
      the 20-year-old went on a dangerous crash diet that quickly took 60 pounds off his 5’8" frame.
    </p>
    <p>
      Ironically, the diet left him too weak and sick to play sports and the weight eventually came back. He was almost back up
      to 200 pounds when his life would finally head towards his athletic dreams. Eric’s best friend, Keller, and his parents,
      Shelley and Bill, had all transformed their bodies with Isagenix and came out winners in the 2008 and 2009 IsaBody
      Challenge® contests. They convinced the 20-year old to give Isagenix® a try.
    </p>
    <p>
      "I went to Celebration in 2008 and they had me try an IsaLean® Shake," recalls Eric of Washington. "I didn’t like it very
      much at first, but the next morning they asked if I wanted one again and from there I was really hooked."
    </p>
    <p>
      After initially losing 30 pounds, Eric slowly let life get in the way as he moved, started college and began working full
      time. Within a year the weight had come back and it was then that Shelley convinced Eric to enter the 2010 IsaBody
      Challenge® as motivation to get into shape for good.
    </p>
    <p>
      Once the budget-conscious college student discovered Isagenix was actually saving him money on groceries, he was all in.
      Living the Isagenix lifestyle became a team effort as Keller moved in and helped Eric make lifestyle changes that
      would keep him on track for the Challenge.
    </p>
    <p>
      The 3rd-place winner in the Men 18-35 Category diligently followed his Isagenix routine and took an excited interest in cooking
      healthy meals. Exercise included intramural sports at school—whiffle ball, soccer, basketball, baseball, football,
      anything and everything he could join—and what Eric dubbed "hidden exercise."
    </p>
    <p>
      "I always looked for excuses to exercise. Anytime I could go without a car, I did," says Eric, who rode his bike to work
      and ran to school each day. "I even bought a recumbent bike to ride while doing homework."
    </p>
    <p>
      Today that inner kid is finally the athlete he’s always dreamed of being. Since high school, Eric’s gone from running an
      8-minute, 30-second mile to finishing a 5K in 18 minutes. He’s also jumped from the bench to almost touching the
      rim and is working on his dunking technique.
    </p>
    <p>
      "I’m loving it," says Eric about his hard-earned athletic prowess. "It’s a whole new kind of respect when you come into a
      gym and you’re someone people want on their team. I’ve never had that experience before."
    </p>
    <p>
      After releasing a total of 30 pounds on Isagenix, Eric has sculpted his physique down to 155 pounds and 8 percent body fat.
      With the transformation, Eric is even more dedicated to promoting an active lifestyle. He recently completed a program
      to become a personal trainer and plans to pursue exercise science and become a sports doctor.
    </p>
    <p>
      "People can see my success and I can show them what it takes to get it done," shares Eric. "If I can share the world of Isagenix
      as well as a healthy lifestyle, that’s fantastic."
    </p>
    <h3>Eric’s Tips for Weight Loss Success</h3>
    <ul>
      <li>If you really want results you can’t just have exercise or diet, it has to be both.</li>
      <li>I never stepped on a scale until I was done with the Challenge. Looking in the mirror is a million times better than
        the scale because you see what you’ve done and not what the scale tells you. That’s a big motivator.</li>
    </ul>
    <h3>Eric’s Favorite Products</h3>
    <ul>
      <li>Amped Hydrate®</li>
      <li>IsaPro®</li>
      <li>IsaCalcium®</li>
    </ul>`;
  }

  private getGeriNSuccessStory(): string {
    return `<h3>Isagenix®, a Fountain of Youth for Utah Grandmother</h3>
    <p>
      Geri knew she was way too young to feel so old. Although she always ate healthy and exercised, she had a persistent weight
      problem that only got worse with age. With each pound gained, she gradually decreased her activity level because
      it simply became too hard to move. Her health spiraled further downward after a demoralizing comment from an aerobics
      instructor left her self-esteem devastated.
    </p>
    <p>
      At 261 pounds, Geri was so out of shape she couldn’t even walk her grandkids down the block to school. She was desperate
      to get her quality of life back when Isagenix® came along.
    </p>
    <p>
      "I was scared to death I would do old age in a wheelchair," explains Geri of Utah. "I tried so many things for years, healthy
      and unhealthy, but it was like pulling teeth to lose a pound."
    </p>
    <p>
      Geri was amazed to see how positively her body responded to Isagenix. The stubborn pounds that she hadn’t been able to shed
      in almost three decades were melting off. Soon, she was down 18 pounds* and feeling like she was in her 20s again.
      With just 15 weeks left, Geri decided to enter the 2010 IsaBody Challenge® to further motivate herself, but more
      importantly, to have an outlet to share her story and inspire others.
    </p>
    <p>
      "I started late and had already lost 58 pounds*, but I thought it didn’t matter," says Geri. "It was healthy and it worked,
      and I could still make progress. I was still a winner."
    </p>
    <p>
      With nine weeks left, Geri increased her workouts and started lifting weights. She diligently monitored her portions to stay
      on track with calories and increased her water intake. Her first goal was to get below 200 pounds—a plateau she had
      been stuck on for a while. By the end of the Challenge the 3rd-place winner in the Women 50+ Category weighed in
      at 189 pounds.*
    </p>
    <p>
      "I had not been under 200 pounds since I was 23," says Geri. "I found the person I used to be and it feels great to walk
      into a store and not feel like a spectacle that people look at."
    </p>
    <p>
      Isagenix has been a fountain of youth for the dedicated grandmother. She recently went on a camping trip with her grandkids
      and was able to hike and play with the little ones with no problem.
    </p>
    <p>
      "I have the energy for my grandkids that I was scared I wouldn’t have," says Geri. "I went from feeling old, tired and uncomfortable
      to feeling like I have an amazing future, because now I have a body that can take me there."
    </p>
    <p>
      Currently a Star Consultant, the 51-year-old is having a blast sharing her story and helping others find the same happiness
      and success.
    </p>
    <p>
      "I just know my future is bright physically and financially because of Isagenix," says Geri. "I am full of hope and it’s
      a wonderful way to go into the future."
    </p>
    <h3>Geri’s Tips For Success</h3>
    <ul>
      <li>Don’t skip on the system. Even on days when you don’t feel like it, remember that consistency is so important.</li>
      <li>Everyone hits plateaus; it’s part of weight loss. Don’t get discouraged. Keep doing the program and realize your
        body is going through a lot of changes. Your health is going to be so much better and it’s worth the wait because
        it will come.</li>
      <li>Drink lots of water to assist your body with cleansing.</li>
    </ul>
    <h3>Geri’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Chocolate Cream Crisp IsaLean Bar</li>
    </ul>`;
  }

  private getGregAndLoriannWSuccessStory(): string {
    return `<h3>Isagenix® Helps "Too Busy" Parents Schedule Time For Health</h3>
    <p>
      Greg and Loriann always felt too busy. Between juggling work and various events and obligations for their three kids, husband
      and wife were constantly on the go with no time to cook. Meals were usually what the kids ate—potato chips, corn
      dogs, chicken nuggets—processed food that could be warmed up quickly.
    </p>
    <p>
      While the couple stayed active coaching youth sports, their unhealthy eating habits were sabotaging whatever good they were
      doing with exercise. Both had achieved success in the past with various diets but the results were always short-lived
      due to their busy schedules.
    </p>
    <p>
      Tired of being out of shape, Loriann and Greg were serious about making a lifestyle change when a friend introduced them
      to Isagenix®. They tried the Cleansing and Fat Burning System and released a total of 24 pounds and 24 inches.* When
      the 2010 IsaBody Challenge® came along over a year later, it was the clincher they needed to stay committed for the
      long haul.
    </p>
    <p>
      "It was important to get my husband to do it with me," says Loriann. "I always fell off the horse before because of our schedule.
      It made a huge difference in our success to work together to reach a common goal."
    </p>
    <p>
      The organized couple, who never missed an event on the jam-packed family calendar, created a detailed one just for the Challenge
      that outlined their weight loss goals for the week and the daily requirements to reach them. Cleanse Days, Shake
      Days and meals were all mapped out so they never had to make a decision about what to cook.
    </p>
    <p>
      "Writing it down made things happen," says the couple. "We always thought we were too busy, but what we realized is that
      we never missed anything if it was written on the calendar."
    </p>
    <p>
      Their busy schedules once again got in the way when it came to finding time for exercise. Greg had to fit his workouts in
      during his lunch hour, while Loriann worked out to videos and walked in the mornings before the kids got up. Towards
      the end of the Challenge they struggled with a plateau in their weight-loss, so they combated it by walking together
      along a country road where they lived, challenging each other to "just run to the next telephone pole" and alternated
      walking and running to the ones that followed.
    </p>
    <p>
      "We just had to make the commitment, especially for me because I had to get it out of the way before the kids got up. Plus,
      I couldn’t let Greg get ahead of me," laughs Loriann.
    </p>
    <p>
      Adds Greg, "The kids were watching so it held us accountable. You don’t want to set a bad example. You want to show them
      that when you set a goal you can attain it."
    </p>
    <p>
      Their hard work and planning paid off. Even with a spring break vacation and Easter thrown in between, Greg released 36 pounds
      and 33 inches and Loriann released 25 pounds and 29 inches and went from a size 14 to 8.*
    </p>
    <p>
      "We were eating out all the time during vacation, but stayed dedicated to an IsaLean® Shake every morning," says Loriann.
      "That’s what got us through it all. When we got home we did a 9-Day System to get us right back into it."
    </p>
    <p>
      Adds Greg, "There’s always going to be something, but you just have to get right back at it."
    </p>
    <p>
      Still busy, but much healthier, Loriann and Greg are enjoying more than just a physical transformation. The spouses of 19
      years feel like newlyweds again and have created an even stronger marital bond from the camaraderie of tackling the
      Challenge together.
    </p>
    <p>
      Seeing what their parents have done have also affected their kids’ eating and activity choices. The two older boys started
      weight lifting and even ran a 5K with their parents.
    </p>
    <p>
      The Consultants have also carved out time to work their Isagenix business and are actively building it using the same detailed
      approach and meticulous planning they did for the Challenge.
    </p>
    <p>
      "Doing Isagenix and the Challenge built our self-confidence and gave us the passion and drive to stay fit and to help others
      meet their goals," says the couple.
    </p>
    <h3>Greg and Loriann’s Tips for Success</h3>
    <ul>
      <li>Write down your goals! This is the most important step. Writing it down is like setting an appointment and most people
        don’t miss scheduled appointments.</li>
      <li>Don’t over think the products, just do it!</li>
      <li>Have an end result in mind and break it down into smaller goals. Don’t think you can do it in a week because you’ll
        get discouraged. We also put up pictures of past winners so we could see that end result.</li>
    </ul>
    <h3>Greg and Loriann’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean Shake</li>
      <li>IsaPro®</li>
      <li>IsaDelight® on Cleanse Days</li>
      <li>Chocolate Cream Crisp IsaLean Bar</li>
    </ul>`;
  }

  private getHarleyDSuccessStory(): string {
    return `<h3>Harley Discovers New Lease on Life by Dropping Nearly Half His Size*</h3>
    <p>
      At 360 pounds, Harley was heartsick viewing photographs of his family’s Christmas gathering. One picture in particular really
      hit him hard though— it showed that his girth was wider than the Christmas tree. To make matters worse, he’d dressed
      as Santa Claus to entertain his children, but the costume’s black boots couldn’t fit over his thick calves.
    </p>
    <p>
      "The kids didn’t care, but I sure did," shares Harley from Maryland. "I couldn’t even be a good Santa."
    </p>
    <p>
      His jolliness was further cut short during the holidays by a doctor’s harsh warning, declaring that if he wanted to live,
      he had to lose weight. Harley decided it was time to put aside his poor eating habits and save his own life. That’s
      when Isagenix entered the picture.
    </p>
    <p>
      After a friend gifted Harley with two IsaLean® Shakes, he boldly began his Isagenix journey and committed to the products.
      Soon, Harley replaced breakfast and dinner with shakes and the pounds began coming off. Six weeks in, he went for
      a checkup with his doctor, who was documenting his weight-loss and health improvements. In pure amazement, the astounded
      doctor looked up at Harley and exclaimed, "I don’t know what you’re doing, but keep doing it!"
    </p>
    <p>
      The health benefits Harley began to experience then started showing up on the job. Harley experienced more productivity and
      less pain at work, where he regularly puts together space-saving systems and organizational shelving for businesses.
      Prior to shedding the pounds, his physically demanding job left him with joint and muscle aches.
    </p>
    <p>
      "I’d begin the day with my knees wrapped tight with ace bandages, ice packs tucked inside, to numb the aching," explains
      Harley. "Now, I no longer have to rely on ice packs and pain relief methods."
    </p>
    <p>
      Joining the 2010 IsaBody Challenge® kept Harley committed to his regimen. When he contemplated quitting or even cheating,
      he kept his eye on the $10,000 prize, literally. As a reminder of the potential winnings, he scrawled "$10,000" on
      a piece of paper and clipped it to a photograph of his wife and children on his car’s sun visor. At work, he placed
      similar signs inside his folders. At home, he taped signs, reminding him of the prize, inside kitchen cabinets—starting
      with the snack cabinet.
    </p>
    <p>
      While the prize money initially was a key incentive for Harley, now he has a more meaningful purpose behind his new lifestyle.
    </p>
    <p>
      "Now I realize that the most important thing has been getting my health back," shares Harley. "You can’t put a dollar amount
      on the health and mental benefits I’ve gained. Isagenix has given me back my life."
    </p>
    <p>
      Now nearly half his weight, Harley can easily walk four miles on a mountain trail. Before his success with Isagenix, walking
      a quarter of a mile or tackling the stairs in his home left him winded. With a prior pants size of 54, Harley’s proud
      to share that a size 36 is now too big, requiring a belt.* His achievements inspired those around him including his
      wife, who lost 30 pounds using Isagenix products.*
    </p>
    <p>
      These days, when Harley looks in the mirror, he gets very emotional.
    </p>
    <p>
      "I almost want to cry," says Harley. "That’s the guy I always wanted to be, but couldn’t get there. Now I’m no longer thinking
      of food all the time. It’s kind of like I was a bird in a cage, and now I’m free to sing my own song."
    </p>
    <p>
      Since losing 167 pounds,* and becoming the 1st-place winner in the 2010 IsaBody Challenge Men 36 – 49 Category, Harley wants
      to help others achieve their weight-loss goals.
    </p>
    <p>
      "When I introduce friends and family to Isagenix, I feel I’m getting paid to help people," says Harley. "It doesn’t get much
      better than that."
    </p>
    <h3>Harley’s Tips for Success</h3>
    <ul>
      <li>Drink filtered water throughout the day. You’ll feel full and keep hydrated.</li>
      <li>Set a timer for snacks like fruits and vegetables or an IsaDelight®.</li>
      <li>Sign up for the IsaBody Challenge® and focus on the winnings to stay motivated until you discover your deeper "why."</li>
      <li>Inspire everyone around you to be healthy and fit.</li>
    </ul>
    <h3>Harley’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Bars</li>
      <li>IsaLean Shakes</li>
      <li>IsaPro®</li>
      <li>IsaDelight®</li>
    </ul>`;
  }

  private getHollyDSuccessStory(): string {
    return `<h3>Holly Sheds Business Suits for Freedom and Bikinis</h3>
    <p>
      For years, Holly hid behind her business suit. The jacket covered the places she didn’t want to show and the power she felt
      wearing it made up for the insecurity she felt on the inside.
    </p>
    <p>
      Weighing 242 pounds, she always knew that the person who showed up at the office wasn’t the "real" Holly, who was a formerly
      athletic,"popular girl" in high school. But her false reality never sunk in deep enough for her to recognize how
      far away she had strayed away from her former, confident self.
    </p>
    <p>
      Then, she discovered Isagenix® while maintaining her high-stress (and high-paying) job in the corporate environment and became
      curious about the business side. She admits she was actually grateful when she was laid off from her job so she could
      pursue her Isagenix business full time.
    </p>
    <p>
      Unfortunately, while she often lost 20 pounds* on the products here or there, she still never believed that she could create
      a lasting, transformative change and accomplish her health and weight-loss goals.
    </p>
    <p>
      Frustrated that her business seemed to be stalling, Holly turned to an Isagenix Beyond Courage personal development course
      with Chief Training Officer and Senior Vice President David Wood. It was there that she had her "light bulb” moment.
    </p>
    <p>
      "He told me, ‘Holly, when you decide to lose the weight and be a product of the product, your business will explode," recalls
      Holly of Minnesota, who was a 1-Star Silver Circle at the time. "I thought for a minute and realized that he was
      right.’"
    </p>
    <p>
      Little did she realize that by simply committing to the products under the pretense of growing her business that she would
      literally change the course of her life for good and rediscover her formerly confident self.
    </p>
    <p>
      After committing to the 2010 IsaBody Challenge®, Holly hired a personal trainer who worked with many fitness competitors
      and was one herself, Lori H. Taking each day as it came, she focused on the products, listened to popular advice
      shared by top leaders such as Susan S. and began to watch as the scale dip backwards 10 pounds at a time, until she
      reached 52 pounds* lost during the Challenge. But, she still had one more goal to accomplish that she never thought
      was possible: compete in a fitness competition…in a bikini.
    </p>
    <p>
      "I decided in January that I could have the bikini body I wanted and could look hot in one," shares Holly. "When I competed,
      it was a dream. I never thought in a million years I’d be doing a bikini competition."
    </p>
    <p>
      She stuck to a strict training regimen that included running up to 15 miles a day, helping her to even overcome her previously-held
      belief that she disliked running.
    </p>
    <p>
      "I’ve never really been a runner, but now I’m a runner," admits Holly. "Now I’ll be out running and literally do a check—does
      my body hurt? No. Am I breathing hard? No. That means I need to keep going. I really feel it’s because of the products."
    </p>
    <p>
      When she finally walked across the stage in a teeny-bikini at her fitness competition in Florida, she says the experience
      was "awesome." Now she’s committed to competing in even more fitness competitions and already plans to do another
      one in a few months in Las Vegas.
    </p>
    <p>
      Now 90 pounds lighter and seven dress sizes smaller,* Holly says she was able to cut out toxic relationships along the way
      and realize that she was also her own biggest critic and needed to drop her negative self-talk. The dream board she
      has posted in her room features the toned, athletic physique of a fitness model (accomplished) and the goal to reach
      5 Star Golden Circle (now at a 3 Star Golden Circle).
    </p>
    <p>
      Crowned the 2010 IsaBody Challenge Grand Prize Winner and the first-ever female winner, Holly says she’s proud of what she’s
      accomplished and knows she’s on the pathway to accomplishing and creating even bigger dreams.
    </p>
    <p>
      "My world has literally changed," says Holly. "Everything that has happened has given me the confidence to do what I want
      and make it happen."
    </p>
    <h3>Holly’s Tips For Success</h3>
    <ul>
      <li>The secret is in the snacking. Mid morning, have a snack such as a SlimCakes®, and then mid-afternoon, have another
        snack with protein, like half of an IsaLean® Bar. Eating 5-6 times a day keeps your metabolism going.</li>
      <li>For your meal and your snack, always include a lean protein. The more active you are, the more protein your body
        needs to burn fat.</li>
      <li>Take IsaCalcium® right before bed and take as a warm tea or blend it with half of a scoop of IsaPro® and ice and
        water. It helps with deeper sleep.</li>
      <li>Work out—your body can do more than you ever thought your body could.</li>
    </ul>
    <h3>Holly’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shake in Natural Creamy Vanilla with Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>IsaDelight®</li>
      <li>Ageless Actives™</li>
    </ul>`;
  }

  private getJamesPSuccessStory(): string {
    return `<h3>James Quits Sinking Life and Walks on Water</h3>
    <p>
      As a school food service manager, James longed to set a good example for students, but felt helpless about controlling his
      weight, which had steadily increased to 270 pounds. When the swim coach asked James to assist with the school team,
      James worried it was out of his league. It had been 32 years since he had been a part of his own high school swim
      team and, watching the kids swim laps that first day at practice, he worried he’d sink if he jumped in for a rescue.
    </p>
    <p>
      After the school year ended and he began watching his nine-year-old granddaughter, reality hit even harder as he realized
      that he could hardly keep up with her. Soon after, she attempted an intervention for his weight-loss. Having seen
      a highway billboard advertising lap band surgery, she’d asked her parents to pull over to get the phone number.
    </p>
    <p>
      "We’ll make an appointment for grandpa, but tell him we’re taking him out to lunch. He won’t turn down lunch and you can’t
      cancel a doctor’s appointment," said the little girl.
    </p>
    <p>
      When James’ daughter told him the story, he was heartbroken and finally decided to tackle his weight problem.
    </p>
    <p>
      Ironically, James’ brother-in-law visited the next week to attend an Isagenix® convention near James’ home in Anaheim, California.
      Each evening when his brother-in-law returned to James’ home, he was enthusiastic about the convention and James
      and his wife heard many remarkable weight-loss testimonials about people using Isagenix products. Convinced of the
      program’s potential, the couple signed up for the 2010 IsaBody Challenge®.
    </p>
    <p>
      Within a short time, James lost 11 pounds. Then, he dropped another 30 pounds. By November, he’d lost 70 pounds. He completed
      the Challenge down 85 pounds and was chosen as the 3rd-place finisher in the Men’s 36 – 49 Category. James is now
      proud to share that he’s lost 105 pounds using Isagenix products.*
    </p>
    <p>
      "I changed my whole life in one year," shares James. "I feel great. It’s not just the weight loss of over 100 pounds,* my
      health is enhanced. I got the bad stuff out and the good vitamins and minerals in by using the products."
    </p>
    <p>
      James’ wife also achieved success with Isagenix, losing 35 pounds to give up her size 14 pants for a size 6.* The couple
      recently vacationed in Lake Tahoe, where they swam, hiked, and took long walks together. While James used to get
      winded walking around the block, he and his wife hiked eight miles in just one morning of their trip. Recently, as
      a gag, the couple stepped into his old pants, into which they both fit.
    </p>
    <p>
      "We used to just watch TV," James explains. "Now, we’re active together and enjoy talking on our long walks. We have so much
      more to share."
    </p>
    <p>
      James is now an inspiration to his high school students, who witnessed his weight loss during their 10-month school year.
    </p>
    <p>
      "I can honestly say that the students have more respect for me now," he says. "And they trust what I have to say about nutrition
      and fitness. I’m not just relating something out of a text book. I’m living proof."
    </p>
    <p>
      Recently, he gave his granddaughter a piggy-back ride, explaining to her that she represented the extra weight he used to
      carry around. Now she sits on James’ back while he does push-ups. Playing Frisbee and badminton with his granddaughter
      is a frequent and fun weekend activity. He’s often amazed that she’ll tire out before he will.
    </p>
    <p>
      "I get choked up just thinking about it," he says. "People don’t realize that it’s much more than the weight-loss. I’m different
      on the inside. How I interact with everyone has changed. I have more heart. I want everyone to know about Isagenix.
      No more sinking… I’m walking on water now."
    </p>
    <h3>James’ Tips for Success</h3>
    <ul>
      <li>Cut out the junk drinks and have water.</li>
      <li>Have an IsaLean® Bar, when you want something healthy and you’re not at home.</li>
      <li>Eat a high-protein snack like tuna fish to feel satiated.</li>
      <li>Don’t have high-calorie salad dressing. Skip it so you can eat more greens and quality calories like nuts in your
        salad.</li>
    </ul>
    <h3>James’ Favorite Products</h3>
    <ul>
      <li>IsaLean Shake</li>
      <li>Isagenix Greens!™</li>
      <li>IsaLean Bar</li>
    </ul>`;
  }

  private getJeanFSuccessStory(): string {
    return `<h3>Isagenix® Helps "Food-a-Holic" Make Peace</h3>
    <p>
      It’s been more than a year since the beginning of Jean’s incredible Isagenix® journey. A fourth runner-up in the 2009 IsaBody
      Challenge®, the 200-Pound Club member dove into the 2010 Challenge to stay accountable for her success and to hit
      the new goals she had set.
    </p>
    <p>
      "The Challenge kept me on track and inspired. I loved the competitive spirit of it and the fact that I’m competing against
      myself," says Jean. "That’s the heart of the IsaBody Challenge, becoming part of the competition and the process.
      That’s where you’re truly a winner and you get yourself back."
    </p>
    <p>
      To start, Jean set daily goals for Isagenix products and exercise. She did IsaLean® Shakes and Cleanse for Life® every day
      and made the commitment on alternate days to drive 29 miles each way for water aerobics and 32 miles each way to
      go to the gym. When her accountability partner didn’t attend their first swim class, Jean did it on her own.
    </p>
    <p>
      "I was so proud of myself because I continued to go each and every session. The old me would not have done that," explains
      Jean. "I just made a commitment to move more and make my world around my exercise. The body is not meant to be sedentary."
    </p>
    <p>
      Along the way there were personal plateaus to overcome, specifically her long-time battle with food. Jean’s mother used food
      to soothe the 10-year-old after losing her sister and Jean continued the habit into adulthood. Her test came when
      her 90-year-old father-in-law needed extra care. For the first time in her life, Jean didn’t comfort herself with
      food. Instead, she drank extra water with Amped Hydrate® and took a walk.
    </p>
    <p>
      "The drama was there, but the commitment to the goal was so strong," says Jean. "Before Isagenix I lived to eat. I was a
      ‘food-a-holic,’ which to me was no different from an alcoholic or drug addict, except you can’t quit eating. Now
      I eat to live. I finally made peace with food for the first time in 50 years—that was a huge breakthrough."
    </p>
    <p>
      Another breakthrough for the yo-yo dieter was losing seven pounds after going on the maintenance program* and believing for
      the first time that she could not only lose the weight but keep it off forever.
    </p>
    <p>
      "I realized through the Isagenix process that I was an all or nothing person," says Jean. "Whatever the diet was, I would
      perform it to its perfection. But once I quit, anything was game. I always gained all the weight back and more. I
      realized I needed balance."
    </p>
    <p>
      To date, the 1st-place winner in the Women 50+ Category has released a total of 201 pounds and shrunk from a size 40 to 16.*
      She’s enjoying a full and active life going more places with her husband of 13 years and volunteering in the community.
      She even hosts a call every week for people who have a lot of weight to lose or who want advice on how to coach those
      who have a lot to lose. She’s passionate about helping people realize that no food is completely "off limits" when
      you have a healthy relationship with food and you’re using Isagenix. Bottom line: it’s all about balance.
    </p>
    <p>
      "It’s incredible to get the call that I was a finalist," shares Jean. "But you win the day you join Isagenix because you’re
      making good choices, releasing the weight and gaining energy. Everything else is extra."
    </p>
    <h3>Jean’s Tips For Success</h3>
    <ul>
      <li>Have an accountability partner. It should be someone you can talk to and keep in touch with, sharing what your goals
        are and where you are at with them. I have two 100-Pound Club members, one in Arizona and one in North Carolina,
        who I talk to through e-mails and phone calls. It’s a two-way street; a cooperative accountability.</li>
      <li>Celebrate each good choice you make. People make a lot of good food choices, but virtually everybody makes bad ones.
        Face that you’re going to make unhealthy choices and then move back into the system. Don’t dwell on it.</li>
      <li>Make a commitment to move more. Even something as small as carrying your groceries in one bag at a time.</li>
    </ul>
    <h3>Jean’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>IsaLean® Shake</li>
      <li>IsaLean Bar</li>
    </ul>`;
  }

  private getMaryASuccessStory(): string {
    return `<h3>Washington Hairdresser Discovers 50 is the New 35</h3>
    <p>
      Mary used to be the life of the party. But that vitality slowly faded through the tribulations of marriage, kids, divorce
      and the change of life. Within the span of 10 years, the Washington hairdresser fell into a deep sadness and let
      her health and appearance go.
    </p>
    <p>
      "I was so down about my life, my schedule, everything," says Mary. "I would wake up on my days off, look around me and literally
      go back to bed. I didn’t have the energy or the will to do anything."
    </p>
    <p>
      Her ultimate push to make a change came after seeing pictures of herself on Facebook. Freaked out by how bad she looked,
      the mother of two immediately called a friend who had been trying to get her on Isagenix®. This time, Mary was ready.
    </p>
    <p>
      It was at the beginning of her Isagenix experience that Mary’s sponsor suggested she sign up for the 2010 IsaBody Challenge®.
      Not knowing, or caring much about it, Mary agreed but wasn’t truly motivated until she discovered she had released
      24 pounds in a short period of time on Isagenix.* Ecstatic, she kicked her healthy habits into high gear.
    </p>
    <p>
      Before, it was too easy for the busy single mother, who spends up to 12 hours a day outside of the house, to grab fast food.
      To save time and make sure her body got the proper nutrition, Mary spent her Cleanse Days making lunch for the entire
      week. ("If I’m not going to eat, I’m going to smell the food!") When her daily walks became too easy, the 50-year
      old joined a gym and started working out with a trainer, even using her after-hours gym key on the nights she worked
      late.
    </p>
    <p>
      "Every day I wake up and I’m ready to get things accomplished," says Mary. "Two years ago I painted my daughter’s bedroom
      and I couldn’t move for three days. Now I can work a full day and still come home and clean the house. I have so
      much energy on Isagenix and I love it!"
    </p>
    <p>
      Mary once thought her life was over at 40. At 50 she looks and feels the best she ever has, and jokes that 50 is the new
      35. Formerly a size 16, the now petite size-6* 2nd-place winner in the Women 50+ Category can now share clothes with
      her 16-year-old daughter and wear the same tight-fitting blouses that the young co-workers at her salon wear. The
      new Associate has been able to help other hairdressers at the salon try Isagenix, as well as many of her clients.
    </p>
    <p>
      "I’m going to be working the business even more because Isagenix has done so much for me and it can help so many people,"
      says Mary. "Isagenix has truly given me back my self-confidence and zest for life, and the most important thing,
      laughter!"
    </p>
    <h3>Mary’s Tips for Success</h3>
    <ul>
      <li>If you live a busy lifestyle or travel, it’s easy to split up the products and meals so they fit into your schedule.
        I split my lunch into three parts because I didn’t have time to sit down and eat a full meal.</li>
      <li>Find a partner that can give you pep talks when you feel discouraged. During one period, I lost no weight at all,
        only inches. My friend told me not to get discouraged, that I was changing from the inside out. She gave me the
        courage to keep going and I lost 14 pounds! She also kept me in check when I wanted to binge.</li>
      <li>If you do binge, just start over the next day and move forward. That’s what I love about Isagenix!</li>
    </ul>
    <h3>Mary’s Favorite Products</h3>
    <ul>
      <li>Amped Hydrate®</li>
      <li>IsaLean® Shake in Natural Creamy Vanilla mixed with IsaFruits® and Isagenix Greens!™</li>
      <li>IsaDelight® is your savior on Cleanse Days.</li>
    </ul>`;
  }

  private getMelanieSSuccessStory(): string {
    return `<h3>Washington Woman Skyrockets Her Energy and Feels on Top of the World</h3>
    <p>
      While seated at the salon for a haircut, Melanie intently listened to her hairstylist’s weight-loss success story. Using
      Isagenix® products, her stylist, Shelley, dropped 31 pounds,* got fit, and went on to win the 2008 IsaBody Challenge®
      in her category. At 170 pounds, Melanie was seeking a way to lose weight and boost her energy, but was hesitant to
      try Isagenix.
    </p>
    <p>
      "It’s funny… I listened to Shelley’s success using Isagenix and thought, ‘That just couldn’t be me.’ What if I started, but
      couldn’t do it?" admits Melanie. " I guess I just needed to be ready to change my life."
    </p>
    <p>
      In an attempt to do something about her excess weight and low energy, Melanie began cutting calories and exercising. However,
      the effort didn’t achieve her desired results. She lost minimal weight over many months and still felt lethargic.
    </p>
    <p>
      Then, something in her switched on in her head "like a light bulb." Melanie recalled Shelley’s success with Isagenix and
      finally felt ready. She decided to overcome her fear, and step out and do it.
    </p>
    <p>
      One voicemail to Shelley and a few days later, she took the plunge and began her self-described "mind-blowing results" using
      Isagenix products. Melanie watched as the pounds began to drop, her energy skyrocketed and her mind cleared.
    </p>
    <p>
      "Within a short time, I lost nine pounds* and felt tons of energy. But, even more amazing was my mental clarity. It was as
      if a fog cleared and I found myself," Melanie shares.
    </p>
    <p>
      As a full-time mother to four children (ages 2 to 14) and guardian of a teenaged cousin she had welcomed into her home, Melanie’s
      day-to-day life was often hectic. However, her increased energy and focus helped her to remain relaxed and in control.
      Now, Melanie’s friends often comment on how calm she seems when they come to visit, even as the usual mayhem gets
      well under way.
    </p>
    <p>
      Melanie credits her husband who also embraced Isagenix, even receiving Honorable Mention in his category of the Challenge,
      for helping her stick with the program. These days, the couple jogs and bikes together, and created a successful
      business with Isagenix together.
    </p>
    <p>
      "Isagenix has connected us as a couple," shares Melanie. "We encourage each other and now have so much more to share. It’s
      had a 100-percent positive effect on our relationship."
    </p>
    <p>
      Melanie says she loves who she sees in the mirror now. Until recently, it was tough-going squeezing into her size 12 pants.
    </p>
    <p>
      "I really needed a size 14, but couldn’t face it," she admits, with a laugh. Now, her size eight pants are an inch too big,
      requiring a belt. Her waist shed over six inches, her rear decreased over five inches, and her arms lost two inches
      each.* Her weight-loss of 25 pounds ranked her as a proud 3rd-place winner in the 2010 IsaBody Challenge Women 18–35
      Category. The only thing that has gotten bigger on Melanie these days are her firm and fit calves, grown in size
      due to her new devotion to exercise.
    </p>
    <p>
      "I was convinced I’d never be a runner, or bike and swim. I’d certainly never thought I’d be an athlete," Melanie shares,
      who now bikes 22 miles, swims a half-mile in the lake, and jogs three miles.
    </p>
    <p>
      Melanie’s latest athletic pursuit is training for a triathlon in Seattle near her home.
    </p>
    <p>
      "Now, I know that everything that I thought was impossible is possible," says Melanie. "I feel on top of the world."
    </p>
    <p>
      Her enthusiasm is so contagious that Melanie feels like a magnet attracting even more people thanks to her improved, positive
      spirit.
    </p>
    <p>
      "I’m not just thinner, I feel so much better. People often approach me and want to know what I’ve done," says Melanie. "They
      say, ‘You look like you feel good. I want to feel like that.’ I think they perceive that I finally love myself."
    </p>
    <h3>Melanie’s Tips for Success</h3>
    <ul>
      <li>Take Ionix® Supreme if you don’t get enough sleep. It’s like your morning coffee, but even better because of the
        health benefits!</li>
      <li>Begin your Isagenix program with a family member or friend to help you stay focused and motivated.</li>
      <li>Believe in the products because they really work!</li>
      <li>Take IsaPro® to help you build lean muscle.</li>
      <li>Set an example for your kids by eating well and being fit.</li>
    </ul>
    <h3>Melanie’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>Amped Hydrate®</li>
      <li>Cleanse for Life®</li>
      <li>IsaPro®</li>
    </ul>`;
  }

  private getMercedesRSuccessStory(): string {
    return `<h3>At Rock Bottom, 40-Year-Old Transforms Body and Life With Isagenix®</h3>
    <p>
      Just before discovering Isagenix®, Mercedes was going through a very dark period in her life. The 40-year-old was reeling
      from a miscarriage, the aftermath of which eventually ended her relationship, taking with it the business she shared
      with her former partner. She was suddenly alone, unemployed and 45 pounds heavier due to complications from the pregnancy.
    </p>
    <p>
      The extra weight dramatically changed her petite 5’1" frame and Mercedes desperately tried everything to lose it, even spending
      $400 on a personal trainer. After 30 days, the Georgia resident had lost just one pound.
    </p>
    <p>
      "I worked out three times a week, ate healthy and took supplements and even medication to try to fix things, but nothing
      worked," says Mercedes. "I looked in the mirror and realized it didn’t matter what I did. My hope was gone and that’s
      when I felt completely let down."
    </p>
    <p>
      At rock bottom, Mercedes ironically discovered Isagenix through her ex. His mother thought it could be the solution Mercedes
      desperately needed. Leery of spending more money on something that wouldn’t work, Mercedes started with the 9-Day
      Cleansing and Fat Burning System reasoning that she didn’t have much else to lose by giving the lower-cost system
      a try.
    </p>
    <p>
      Just a few days in, she was down 5 pounds* and immediately put in an order for a 30-Day System so she’d have something after
      her initial supply ran out. Experiencing such positive results was a confidence boost for the Georgia resident. She
      signed up for the 2010 IsaBody Challenge® and relished the newfound purpose and laser focus it gave her.
    </p>
    <p>
      "If you want to get to a goal, the IsaBody Challenge® will help you get there," says Mercedes. "It will help give you that
      focus so you can be successful."
    </p>
    <p>
      Not willing to take anything for granted, she exuberantly embraced the Challenge as a measure to see how far she could go.
      Wanting to be more muscular and have better health, she ambitiously trained with a grueling six-mile run/hike, three
      times a week up and around one of the toughest mountains in the area. She also took up Zumba, a Latin dance/aerobics
      class. She even got her certification as an aerobics instructor recently because she loved it so much.
    </p>
    <p>
      Already ingrained with healthy eating habits, Mercedes never missed a day of IsaOmega Supreme®, IsaLean® Shakes, Isagenix
      Greens!™ and Ionix Supreme®.
    </p>
    <p>
      The life that Mercedes has today is reflective of the dream board she created at the beginning of her Isagenix journey. Now
      a svelte 103 pounds,* the 3rd-place winner in the Women 36-49 Category is currently a Consultant working toward becoming
      an Isagenix Millionaire. She is feeling secure and hopeful again thanks to the supportive family she’s found at Isagenix.
    </p>
    <p>
      "This is the happiest and healthiest I’ve felt in my life," says Mercedes. "Isagenix works and the people in the company
      really care and want you to succeed."
    </p>
    <h3>Mercedes’ Tips For Success</h3>
    <ul>
      <li>Do an exercise that you love. I love to dance, so I do Zumba, a mix of Latin dance and regular fitness classes.</li>
      <li>If you fall off the program, just get right back into it. If I go out and eat something that’s unhealthy, I take
        an IsaFlush!® and some Cleanse for Life® or do two Cleanse Days.</li>
      <li>Before Isagenix, I didn’t know that you needed 25 grams of fiber a day. The IsaLean® Shakes with the Isagenix FiberPro™
        are a tasty way to get fiber into your diet.</li>
      <li>Put your goals in writing as a way to stay focused every day. I did a dream board of things I wanted and several
        things have already come true—like being a finalist in the IsaBody Challenge!</li>
    </ul>
    <h3>Mercedes’ Favorite Products</h3>
    <ul>
      <li>IsaOmega Supreme®</li>
      <li>IsaLean® Shake</li>
      <li>Isagenix Greens!™</li>
      <li>Ionix® Supreme</li>
      <li>Essentials for Women™</li>
    </ul>`;
  }

  private getMichaelOSuccessStory(): string {
    return `<h3>Social Worker Turns Focus On Self, Releases 185 Pounds*</h3>
    <p>
      Michael felt like a hypocrite counseling clients to set and achieve goals when he couldn’t even succeed at losing weight.
      The 27-year-old licensed social worker was dangerously overweight and already on medications to keep his health challenges
      in check. Everyday activities like visiting clients or walking up the stairs from his living room to the kitchen
      became extreme physical challenges. Doctors and his wife feared for his life. Introduced to Isagenix® by a friend,
      Michael didn’t take it seriously at first because he was so discouraged by years of failed weight loss attempts.
    </p>
    <p>
      "I tried everything to lose weight and I just couldn’t do it," says Michael of Nevada. "I didn’t think Isagenix would work.
      I bought some products but wasn’t serious about it until a year later when I hit 410 pounds."
    </p>
    <p>
      After the first three months, Michael was shocked at how much weight he was releasing each month. It was in that first package
      that he saw a copy of IsaNews magazine featuring the winner of the 2009 IsaBody Challenge® on the cover that everything
      clicked. Feeling encouraged by his initial results, he signed up for the 2010 Challenge for extra motivation.
    </p>
    <p>
      "I’m still shocked that I got this far," says Michael, who lost 146 pounds and 133.5 inches* during the Challenge. "Doing
      Isagenix felt so easy to me that I figured there were tons of people losing a lot of weight. I didn’t even think
      I’d be in the running."
    </p>
    <p>
      Reading books on nutrition, cooking organic meals and working out became a fun bond for Michael and his wife of five years,
      Heather, who lost 20 pounds* with all the lifestyle changes. With less weight to carry, the 2nd-place winner in the
      Men 18-35 Category was able to start walking and eventually move up to jogging. Once the scale dipped below 300,
      Michael hit the pedals on his road bike. To further stay motivated, husband and wife signed up for various races
      and even a triathlon.
    </p>
    <p>
      "Finishing the triathlon was huge. I biked, swam and ran the whole thing," remembers Michael. "I always envisioned myself
      as overweight and not able to do those things, but after that I realized I was in good shape."
    </p>
    <p>
      No longer facing physical challenges, Michael is celebrating breakthroughs. For the first time in five years he weighs less
      than 300 pounds* and he can ride 70 miles on his bike and run six miles with no pain. No longer anxious in big groups,
      Michael and Heather are enjoying trips to the mall and playing board games with friends. Best of all, he can now
      proudly look his clients in the eyes and inspire them to do their best.
    </p>
    <p>
      "People ask if I got surgery because of my rapid transformation. I can proudly say it was hard work and Isagenix," shares
      Michael. "I feel like a new person."
    </p>
    <h3>Michael’s Tips For Success</h3>
    <ul>
      <li>Sign up for races. For me, they were fun to do with my wife and a great way to stay motivated and on a regular training
        schedule.</li>
      <li>A lot of people are concerned about Cleanse Days. I usually do it on a day off from work and that seems to work well.
        Figure out what’s best for you though and stick with it.</li>
      <li>I drink at least half my body weight in ounces, typically two gallons of water per day.</li>
    </ul>
    <h3>Michael’s Favorite Products</h3>
    <ul>
      <li>IsaDelight®</li>
      <li>Cleanse for Life® powder</li>
    </ul>`;
  }

  private getMichaelWSuccessStory(): string {
    return `<h3>Isagenix® Gives "Dying" Man New Hope</h3>
    <p>
      Michael should have felt hopeful for the future after recently graduating from college. Armed with an accounting degree,
      the 23-year-old went to interviews, but never heard back. He suspected potential employers saw him as a risk at 383
      pounds. It didn’t help matters that he struggled daily with feeling down and often dreaded getting out of bed in
      the morning. Self-conscious about his weight, Michael mostly kept to himself and ate to soothe his pain.
    </p>
    <p>
      "It was my comfort and I was always eating fast food and overeating to feel better," says Michael of Georgia. "I had no self-esteem.
      I just didn’t want to deal with myself."
    </p>
    <p>
      Little did he know that a routine visit to a chiropractor would change his life forever. It was his mom’s appointment, but
      the doctor was more focused on Michael, telling him point-blank that he would die if he didn’t do something. Although
      his family had been pleading with him for years to lose weight, it was the doctor’s frank warning and suggestion
      to try Isagenix® that finally did it for Michael.
    </p>
    <p>
      "I didn’t know if Isagenix would really work for me, but then I lost 30 pounds,*" says Michael. "Plus, after I was using
      the products for a while, it didn’t feel like it was going to be like a lot of diets out there where it was going
      to work for a few months and then I would rebound. I haven’t gained a pound back yet."
    </p>
    <p>
      At 350 pounds Michael was told about the 2010 IsaBody Challenge® and the chance to win a vacation and money. He committed
      to the Challenge, but kept his focus on losing weight instead of winning.
    </p>
    <p>
      The Georgia resident cut his dependence on southern staples like fried food and sweet tea and replaced them with fish, vegetables
      and lots of water. When he felt comfortable enough to join a gym, he eased into working out just 30 minutes each
      time. He is now up to two hours and also swims two days a week. His bonus exercise is the yard work he does on his
      family’s two-acre spread.
    </p>
    <p>
      "Last year, I could hardly do the job," says Michael. "It took me almost three days but now I can do most of it in one day."
    </p>
    <p>
      In April, the 1st-place winner in the Men 18-35 Category hit his biggest milestone—100 pounds lost.* He’s now about 43 pounds
      from his goal weight of 190, but at 233 pounds, Michael already feels like a winner. No longer shy and self-conscious
      around people, he even volunteers and does yard work for his church and joined the choir.
    </p>
    <p>
      "I’ve become a better person," says Michael. "I am doing things now that I never thought I could do. I appreciate my second
      chance at living knowing how much effort it takes. Thanks to Isagenix, I am motivated to live and maintain my healthy
      lifestyle.”
    </p>
    <h3>Michael’s Tips For Success</h3>
    <ul>
      <li>Don’t do it for anybody else. You have to be committed and motivated and really want it for yourself.</li>
      <li>Set small goals. I started with 30 minutes a day at the gym. I learned to slowly build up the time and not wear myself
        out.</li>
      <li>It’s OK to take a rest and stop during your workout. When I started running, I took a rest and drank water every
        time I ran out of breath. Now I can do about 20 minutes on the treadmill without stopping.</li>
    </ul>
    <h3>Michael’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Bar</li>
      <li>IsaFruits®</li>
      <li>Amped Hydrate®</li>
    </ul>`;
  }

  private getOraliaASuccessStory(): string {
    return `<h3>An Emotional Journey Has Happy Ending For Texas Mom</h3>
    <p>
      A newcomer to the neighborhood, new mom Oralia joined the local Mom’s Club hoping to make friends. But next to the other
      young, fit mothers the 47-year-old felt out of place. During play dates, 293-pound Oralia stood while the other moms
      played on the floor with their kids. Self-conscious about her weight and wanting to avoid the awkward social situations
      around it, Oralia became less active in the Mom’s Club and quit attending the play dates altogether.
    </p>
    <p>
      Desperate to find a permanent weight-loss solution, Oralia became fixated on the idea of going through with a drastic weight-loss
      surgery and even managed to persuade her skeptical husband to spend the money. But elation soon turned to disappointment
      and despair after her research uncovered too many stories of desperate people who had gained all the weight back.
      She could no longer justify the cost to herself and the stay-at-home mom reluctantly gave up on the idea, along with
      her last shred of hope. She was devastated.
    </p>
    <p>
      Through tears, Oralia remembers, "When I gave up the idea of surgery I thought there was no future for me. I thought of my
      son and how he would feel when he was old enough to realize he had a mom who doesn’t come to games and school functions
      because of her weight. I was eating myself closer to a premature death."
    </p>
    <p>
      Strangely enough, it was a scrapbooking blog that saved the Texas mom from her fearful prophecy. That day, the entries didn’t
      come up about scrapbooking, but instead, the blogger’s exciting weight loss of 30 pounds* on Isagenix®. Full of anticipation,
      Oralia googled Isagenix and read everything she could.
    </p>
    <p>
      "I got very excited because I thought this could be for me," explains Oralia. "I saw the 100-, 200-, and 300-Pound Club and
      all the people who were keeping the weight off. The athlete profiles were especially exciting, discovering that even
      they were turning to Isagenix to lose weight and get to their healthiest."
    </p>
    <p>
      A "rule follower" by nature, Oralia’s first few days on Isagenix were shaky. After talking with someone at Isagenix World
      Headquarters, she learned that the 30-Day Cleansing and Fat Burning System was actually quite flexible and that it
      was OK to adjust how she used the 30-Day System. For her, it was eating whenever she got hungry, which was sometimes
      every hour. Within weeks she saw results and then dramatic weight loss over the following months.
    </p>
    <p>
      "Nothing was going to stop me," shares Oralia. "I saw the 2010 IsaBody Challenge® and signed up right away. I set my sights
      on the 100-Pound Club, as well. The old me that was so self-conscious, embarrassed and disgusted was going away and
      coming out was this person I didn’t recognize. I sure was enjoying getting to know her though."
    </p>
    <p>
      Pumped about her progress, Oralia left her elliptical machine at home behind and joined a gym. Motivated by the gym’s uplifting
      atmosphere, the once sedentary homebody fell in love with spin classes. By the end of the Challenge the former size
      30 was 72 pounds lighter and fitting into a size 18.*
    </p>
    <p>
      When she got the call, the 1st-place winner in the Women 36-49 Category and her husband cried because of what she had accomplished
      on her way to creating the new Oralia—a Mom’s Club president, soon-to-be aerobics instructor and Consultant with
      Isagenix.
    </p>
    <p>
      Oralia’s transformation has inspired her husband, who lost 50 pounds,* as well as people from the gym who came out of the
      woodwork after seeing her 100-Pound Club pictures.
    </p>
    <p>
      "This journey is still filled with emotion," says Oralia. "I absolutely love that I have an incredibly active lifestyle.
      I was never able to say that before Isagenix!"
    </p>
    <h3>Oralia’s Tips For Success</h3>
    <ul>
      <li>It’s OK to eat if you’re hungry, just keep it healthy. Even if you’ve eaten something that’s not healthy that day,
        drink the IsaLean® Shake to give your body instant, superior nutrition.</li>
      <li>Don’t be so strict with yourself that you feel deprived. I occasionally indulge and am grateful I have Isagenix there
        waiting for me.</li>
      <li>Find an exercise you love doing. I started on an elliptical trainer at home, but soon got bored and joined a gym.
        I discovered that I loved going out of the house to work out. I take advantage of the classes at the gym, especially
        Body Bar and Spin.</li>
    </ul>
    <h3>Oralia’s Favorite Products</h3>
    <ul>
      <li>Chocolate Cream Crisp IsaLean® Bar</li>
      <li>IsaLean Shake in Natural Creamy Chocolate</li>
    </ul>`;
  }

  private getPatrickDSuccessStory(): string {
    return `<h3>Runner Loses 90 Pounds and Rediscovers New Self in Midst of Tragedy</h3>
    <p>
      Patrick is a runner.
    </p>
    <p>
      In one sense, being a runner for Patrick was a good thing. At 310 pounds, he trained his heart out with his siblings as part
      of a cancer research fundraising team, determined to complete his first marathon, make a difference and honor his
      mother who was battling cancer at the time.
    </p>
    <p>
      Riding high after such a big accomplishment, he and his family gifted their mother with their four finisher medals and a
      large trophy with a female runner on it. The inscription on the plaque read "The Courage Award 2006" for their mother
      who " is the most courageous person we know…who runs her own marathon every day…battling cancer." The family rejoiced
      in their accomplishments and reveled in one another’s company, enjoying an outing to Disney World together.
    </p>
    <p>
      Just 16 days later, Patrick’s mother passed away. That’s when the running took a bad turn. Falling into deep despair, he
      sought refuge on his couch watching TV and eating to soothe the pain. His running shoes remained in his closet untouched.
      Though he had lost a significant amount of weight during his marathon training, it all piled back on and then some.
    </p>
    <p>
      His struggle only worsened as he and his family worked to try to comfort their father who had reached his limits and had
      lost his will to live. Several months later, Patrick’s father was gone too.
    </p>
    <p>
      At first, he was broken, unsure of what to do to pick himself up from the immense tragedy he had waded through. Then, his
      landscaping friend and former IsaBody Challenge® winner reminded him of Isagenix® and something clicked.
    </p>
    <p>
      His friend Mike had experienced tremendous results, losing 60 pounds and 20 percent of his body fat.* Patrick longed for
      that and more, so in November of 2009, he set his plan, with a goal to run seven endurance events, drop 100 pounds
      and win the 2010 IsaBody Challenge.
    </p>
    <p>
      He had turned back to running, but this time, he was running towards a new life. He committed to the 30-Day Cleansing and
      Fat Burning System, nourishing his body with IsaLean® Shakes with high-quality whey protein, fresh berries and bananas
      after each training run. As his energy increased and he continued to put in his miles, he began to see his times
      dropping and soon, he wasn’t "dead last" in many of the races he competed in. Patrick made good on his first goal
      and ran 10 half marathon races and three full marathons during just the seven-month Challenge time period, with a
      total of 24 races completed and more than 250 miles run. Three of those marathons were all within a six week timeframe.
      Each mile and pound represented more time to process and reflect on the tragedies he’d overcome in less than a year.
      Patrick admits he couldn’t "save the life of my mom or dad, but I realize now that I could save the life of someone
      else."
    </p>
    <p>
      "My mission is to inspire other people to make a change for the better," shares Patrick. "If my story inspires one person
      to make a change for the better, then I’m doing in my own small way God’s work. Isagenix is that vehicle for change."
    </p>
    <p>
      Now 90 pounds lighter with a chiseled physique and a waist that’s transformed from a 42 size pant to a 34-sized pant,* his
      journey with the IsaBody Challenge has gone beyond the "weight-loss contest" that many others might think it is.
    </p>
    <p>
      "The IsaBody Challenge is a metaphor for life," shares the 46-year-old from New Jersey. "You have to break barriers and do
      things that you once thought were impossible that are now possible. It’s a self-discovery process."
    </p>
    <p>
      The 2nd-place winner in the Men 36-49 Category says he’s put aside his "workaholic" ways and is proud of his new healthy
      lifestyle. Getting choked up, he says his parents would be proud of the change he’s made.
    </p>
    <p>
      "Isagenix is more than a weight-loss company and the IsaBody Challenge is more than a biggest loser contest," says Patrick.
      "I got my life back."
    </p>
    <h3>Patrick’s Tips For Success</h3>
    <ul>
      <li>Follow the 30-Day Cleansing and Fat Burning System and execute the plan.</li>
      <li>Find your compelling why—your "motive" behind the "motivation." That’s the fuel to get you from where you are to
        where you want to be.</li>
      <li>Set goals far in advance and chip away at them with everything that you do.</li>
      <li>Drink lots of water and refuel your body with IsaLean® Shakes after a tough workout.</li>
    </ul>
    <h3>Patrick’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>IsaLean Bars</li>
      <li>Cleanse for Life®</li>
    </ul>`;
  }
}
