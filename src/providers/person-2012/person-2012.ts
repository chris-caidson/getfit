import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2012Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "angela-r": htmlString = this.getAngelaRSuccessStory(); break;
      case "craig-c": htmlString = this.getCraigCSuccessStory(); break;
      case "dr-victoria-t": htmlString = this.getDrVictoriaTSuccessStory(); break;
      case "elizabeth-m": htmlString = this.getElizabethMSuccessStory(); break;
      case "frank-p": htmlString = this.getFrankPSuccessStory(); break;
      case "leanne-k": htmlString = this.getLeanneKSuccessStory(); break;
      case "lois-l": htmlString = this.getLoisLSuccessStory(); break;
      case "miriam-b": htmlString = this.getMiriamBSuccessStory(); break;
      case "patricia-h": htmlString = this.getPatriciaHSuccessStory(); break;
      case "rebekah-h": htmlString = this.getRebekahHSuccessStory(); break;
      case "tiff-d": htmlString = this.getTiffDSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAngelaRSuccessStory(): string {
    return `<h3>Housewife Turns Entrepreneur and Helps Save Family Home</h3>
    <p>
      As a child, Angela was forced to grow up way before her time.
    </p>
    <p>
      At 10, she witnessed her sister die after being struck by a speeding motorcyclist while walking home one afternoon. The event,
      so horrific, would change her life and leave her suffering from survivor’s guilt for many years to come.
    </p>
    <p>
      By 16, she was on her own wondering "what now"?
    </p>
    <p>
      "I became a dieting guru trying everything to lose weight and feel more alive," says Angela of Washington.
    </p>
    <p>
      But, in 1988 everything changed for Angela when the love of her life asked for her hand in marriage. Sharing two beautiful
      children, Angela and her husband eventually faced a few tough challenges as a family: their 11-year-old son was diagnosed
      with a devastating medical condition and then her husband suffered a tragic, life-changing accident within months
      of each other.
    </p>
    <p>
      "My life’s focus became fighting for them with every fiber of my being," says the mom of two. "I very quickly lost myself.
      I was overcome with guilt for being relatively healthy, and guilty for being too distracted by tragedy to be there
      fully for my beautiful daughter."
    </p>
    <p>
      It was also the same time Angela’s weight started to spiral out of control.
    </p>
    <p>
      After spending close to eight years researching a vast array of medical conditions associated with her son’s condition, Angela
      became a nutritional guru and stumbled upon Isagenix.
    </p>
    <p>
      She also started to see success on the scale after using the products. That’s when she decided to join the IsaBody Challenge.
    </p>
    <p>
      With mounting medical bills and the family home nearing foreclosure, Angela knew she had to act quickly to start generating
      new income for the family.
    </p>
    <p>
      "I remember asking myself over and over how I was going to pay for these life-saving products and the answer was simple,"
      admits the Challenge finalist. "I would do whatever it took."
    </p>
    <p>
      Inspired by the successful women within Isagenix, Angela took a leap of faith and started her own business.
    </p>
    <p>
      Her life now includes, living authentically, cultivating deep friendships, and, thanks to Isagenix Co-Founders Jim and Kathy
      Coover’s incredible compensation plan, a home safe from foreclosure.
    </p>
    <p>
      "I feel like I am able to dream for the first time," she says. "I’ve finally found something I am truly passionate about."
    </p>
    <p>
      In addition, Angela’s daughter has decided to follow in her mother’s footsteps and has started sharing the Isagenix message.
    </p>
    <p>
      "Helping others to achieve physical health and financial freedom is such a beautiful thing," shares the 1-Star Golden Circle
      and Crystal Executive. "It is like looking through the eyes of a child and seeing the excitement of discovery for
      the first time."
    </p>
    <p>
      Entering her second Challenge just a few weeks ago, Angela is hoping to win this upcoming Challenge and continue on to become
      the next Isagenix Millionaire.
    </p>
    <p>
      "My dreams are big," she says. "My ‘why’ is even bigger!"
    </p>
    <h3>Angela’s Tips for Success</h3>
    <ul>
      <li>Stay the course. If it worked for me, it will work for you. You have to set your mind to it and keep going. Success
        doesn’t mean being perfect…it means that I have decided to look beyond the imperfections!</li>
      <li>Dream big! It might feel uncomfortable at first and you may feel undeserving of such big dreams, but each and every
        one of us deserves to live in a body of optimal health! Focus on what you want. What you think about you bring
        about.</li>
      <li>Remember, there is no limit to what you can achieve. A lot of times our limitations come from within. Be willing
        to grow through this journey and reach outside of your comfort zone; that is when great things happen!</li>
      <li>Listen to your body. Put foods in it that make you feel good. For me, that’s avoiding sugar and white flour. Nothing
        processed. There are a lot of great options out there for gluten-free foods. I have found that by tweaking my favorite
        recipes and using healthier alternatives I am doing right by my body and don’t feel deprived.</li>
    </ul>
    <h3>Angela’s Favorite Products</h3>
    <ul>
      <li>IsaLean® Shakes</li>
      <li>IsaDelight Plus™</li>
      <li>Cleanse for Life®</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getCraigCSuccessStory(): string {
    return `<h3>British Columbia Man Goes From ‘I Can't’ to ‘I Can’</h3>
    <p>
      For years, Craig lived in a limit-filled world and was often told "he can’t" do things because of his size. He was a chubby
      child who was teased mercilessly, and the weight only piled on as he approached adulthood.
    </p>
    <p>
      At 13, he was a whopping 185 pounds; by 17 he was 225 pounds. By his early 20s, Craig was tipping the scales at 330 pounds.
    </p>
    <p>
      From a young age, he began using humor as a way to deflect his embarrassment and protect himself against the abrasive taunts
      and constant name calling.
    </p>
    <p>
      "I remember falling through a chair in public one time because of my weight and having to poke fun at myself to cover up
      the pain and humiliation," admits Craig.
    </p>
    <p>
      He had tried numerous weight-loss programs, but to no avail.
    </p>
    <p>
      Overwhelmed by rejection and uneasy about his size, he began to believe he couldn’t do many things. He had given up on his
      dream of one day owning an athletic build, that would let him have the freedom to participate in any sport or adventure
      that presented itself.
    </p>
    <p>
      Then, Craig discovered Isagenix®.
    </p>
    <p>
      When Craig first heard about Isagenix, he was actively trying to lose weight, but not having any luck. After learning about
      Isagenix, he was motivated to make a permanent change and eager to purchase his first 30-Day Cleansing and Fat Burning
      System. He also entered the 2009 IsaBody Challenge®. The combination helped Craig lose 60 pounds* in his first three
      months with Isagenix.
    </p>
    <p>
      Still, the phrase "I can’t" echoed in his head and threatened to sideline his newfound healthy lifestyle as he began turning
      back to his old habits.
    </p>
    <p>
      Thankfully, his friends recognized the change and insisted he attend an upcoming Isagenix event. There he heard a quote that
      would change his outlook on life for good: "You can have anything you want, as soon as you give up the belief that
      you can’t have it."
    </p>
    <p>
      "Right then, I gave up the belief I couldn’t be happy and started taking my health to the next level," shares Craig. "I stopped
      chasing who I thought I was and started living as the real me."
    </p>
    <p>
      Embracing his true identity meant finishing what he had started. Craig was adamant about completing the 2012 Challenge since
      he hadn’t completed his first one back in 2009.
    </p>
    <p>
      "This time I gave it everything I had," says Craig. "Joining the Challenge was a way to hold myself accountable, set a goal,
      and stick with it."
    </p>
    <p>
      Finishing a month and a half early to make the IsaBody Challenge Celebration judging period, Craig lost 37 pounds.* Collectively,
      he has released 126 pounds* and more than 200 inches* with Isagenix. His whole-body transformation coupled with his
      impressive essay "wowed” the judges and won him the 2012 IsaBody Challenge Grand Prize title plus $25,000 in cash
      and prizes. "My sights are now set on becoming an IsaAthlete by competing in my first-ever bodybuilding competition
      this November, and enjoying a life filled with inspiring others to help find their ‘I Can,’" shares the 2012 IsaBody
      Challenge Grand Prize winner.
    </p>
    <p>
      Craig also plans to start his own business and aspires to achieve the prestigious 3 Star Golden Circle recognition by 2013
      "Focus On Your Future" New Year Kick Off.
    </p>
    <h3>Craig’s Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Believe in the products. Once you open up your mind and allow the system to work, it does.</li>
      <li>Drink lots of high-quality water. I know people always say to drink a lot of water, but there is something to be
        said for drinking good quality water.</li>
      <li>Get a good night’s rest. By sleeping a solid eight hours, you’re allowing your body to recharge and prepare for the
        next day.</li>
      <li>Doing any kind of exercise that’ll help keep you motivated. Find a dynamic workout that relates to something you
        love and stick to it.</li>
    </ul>
    <h3>Craig’s Can-Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro Shake</li>
      <li>Ionix® Supreme</li>
      <li>Isagenix Brain and Sleep Support System</li>
    </ul>`;
  }

  private getDrVictoriaTSuccessStory(): string {
    return `<h3>One Woman’s Decision to Save Her Family</h3>
    <p>
      As a clinical psychologist, Dr. Victoria spends her days helping patients improve their quality of life; as a wife and mother,
      her oversized frame was holding her back from doing what she loved most.
    </p>
    <p>
      But, life wasn’t always this way for the former competitive athlete.
    </p>
    <p>
      In 1998, Dr. Victoria was involved in a car accident that left her barely able to walk. As time progressed and she regained
      her footing, she still found it impossible to exercise. After 14 years dealing with severe back pain, loss of sensation
      in her feet and lack of balance, her weight reached an overwhelming 210 pounds.*
    </p>
    <p>
      To add insult to injury, the excruciating pain made it hard to stand, let alone cook, which resulted in poor dinner choices
      for her family. Her actions finally hit home when she saw her youngest daughter’s weight reach 217 pounds.*
    </p>
    <p>
      "When you fail yourself you have no one else to blame but yourself; when you fail your children the feeling is awful," shares
      the mother of six. "Something had to be done for her."
    </p>
    <p>
      After talking with her daughter, Dr. Victoria encouraged her to join a gym and work out with a trainer.
    </p>
    <p>
      "That’s how I met Russell," says the Los Angeles native. "He is our trainer; he helped me conquer my fear of hurting my back,
      taught me how to listen to my body and work out safely, and introduced me to Isagenix®."
    </p>
    <p>
      Russell was also the one who ignited Dr. Victoria’s old competitive spark and encouraged her to join the IsaBody Challenge®.
    </p>
    <p>
      "I was amazed at how well my body responded to the Isagenix products," says Dr. Victoria excitedly.
    </p>
    <p>
      With Russell’s help, Dr. Victoria released 71 pounds*, 81 inches and was named a 2012 IsaBody Challenge finalist. Her husband
      and her daughter, who also worked out with them, collectively lost 83 pounds.*
    </p>
    <p>
      "My goal was to reduce my pain level, and it has been completely eliminated," says this 2012 IsaBody Challenge finalist.
      "I feel so much better and have even improved my balance."
    </p>
    <p>
      Her success has also overflowed into her practice.
    </p>
    <p>
      Dr. Victoria now keeps an IsaBlender® in her office and because of that her patients are enjoying the benefits of drinking
      IsaLean® Shakes.
    </p>
    <p>
      "As I get healthier, they too are focusing on their own health concerns," she says.
    </p>
    <p>
      She also discovered she can make money with Isagenix.
    </p>
    <p>
      "I received my Isagenix credit card and promptly shredded it, not realizing that I had earned money," laughs Dr. Victoria.
      "When I talk to people about the financial opportunities with Isagenix, I refer to it as my ‘accidental earning plan.’"
    </p>
    <p>
      Now, Dr. Victoria takes every opportunity to share her story. She also works out at the gym five days a week and is back
      to her athletic ways, all while maintaining a busy practice and enjoying her family.
    </p>
    <h3>Dr. Victoria’s Tips for Success</h3>
    <ul>
      <li>Get involved. Whether you take part in the Facebook forums or listen to an IsaBody Challenge Coaching call, it is
        really helpful to connect with others who are engaging in the Challenge.</li>
      <li>Write down your goals and broadcast it! I did this every month and still have them in an envelope.</li>
      <li>Clean out your kitchen cabinets and get rid of any processed foods. I donated nine leaf-size black bags of food and
        14 cases of soda to my local food bank.</li>
      <li>Keep track of your progress. We all hit plateaus; seeing the results is the most amazing feeling and gives you momentum
        to move forward!</li>
    </ul>
    <h3>Dr. Victoria’s Favorite Products</h3>
    <ul>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ageless Renewal Serum</li>
      <li>IsaDelight Plus™</li>
      <li>Isagenix Greens!™</li>
    </ul>`;
  }

  private getElizabethMSuccessStory(): string {
    return `<h3>One Mother’s Struggle From Tragedy to Triumph</h3>
    <p>
      In 2000 Elizabeth was ready to take on her next life goal, after nine years of marriage she was ready to start a family.
    </p>
    <p>
      In May 2001, that dream came true for Elizabeth and her husband, Nils, who welcomed their first child, Alexander. The next
      year, Elizabeth and Nils would welcome a daughter, Victoria.
    </p>
    <p>
      Much to their surprise Elizabeth became pregnant with her third child in 2005, gained 10 pounds, but suffered a miscarriage.
      Just seven short months later, she discovered she was pregnant again only this time, she found herself sick and unable
      to play with her kids most of the time. Soon after giving birth to her fourth child, her daughter Victoria became
      ill. Multiple doctor visits would uncover Elizabeth’s then four-year-old little girl had a rare cancer. Shocked and
      scared, Elizabeth and her husband put their needs aside and redirected 100 percent of their efforts and resources
      into helping Victoria get better.
    </p>
    <p>
      But, after a three-year battle that included multiple hospital stays and eating whatever was convenient, Elizabeth lost her
      little girl to cancer.
    </p>
    <p>
      "When you lose a child you don’t know how to take the next step" shares Elizabeth. "Our two other children spent the last
      three years being cared for by friends and neighbors while we were at the hospital. We had to relearn how to be a
      family."
    </p>
    <p>
      It wasn’t until the realization that a new decade was approaching that Elizabeth was ready to make a change. Her best friend
      had been taking Isagenix® and she saw firsthand the effectiveness of the products.
    </p>
    <p>
      "I was turning 40 and didn’t want to be 140 pounds," says the North Carolina native. "I needed a lot of nutritional support,
      and I needed something to help me get stronger, feel better, lose weight and increase my energy."
    </p>
    <p>
      Excited for a new, life-changing journey, Elizabeth ordered a 9-Day Deep Cleansing and Fat Burning System to jump-start her
      success. Half-way through the week she was so ecstatic about her results and how she was feeling, she ordered a 30-Day
      Cleansing and Fat Burning System.
    </p>
    <p>
      She later decided to attend 2012 New Year Kick Off to learn more about the company. That’s when she heard about the IsaBody
      Challenge®.
    </p>
    <p>
      "At first, I didn’t think it was for me because I didn’t have 130 pounds* to lose like Jill Birth," shares the 2012 IsaBody
      Challenge finalist. "But, then I saw Lisa W.’s picture and I could relate to her…the mom body."
    </p>
    <p>
      Excited, Elizabeth filled her pantry with all things Isagenix and committed to using the products wholeheartedly and making
      better food choices.
    </p>
    <p>
      "I told my kids my goal was to make the finals and if I did, we were all going to Phoenix," laughs Elizabeth.
    </p>
    <p>
      And to Phoenix they all went after Elizabeth was named a 2012 Challenge finalist, losing 20 pounds* and trimming down her
      physique. She’s proud of her transformation and even accomplished her ultimate goal: 40 and fabulous. Significantly
      slimmer, happier and more energized, Elizabeth’s infectious new attitude even inspired her close friends and neighbors
      to try Isagenix.
    </p>
    <p>
      Now I’m doing the business, introducing Isagenix to people daily and loving life!"
    </p>
    <h3>Elizabeth’s Tips for Success</h3>
    <ul>
      <li>Make a commitment to yourself and follow through. Find an accountability partner to help you stay on track.</li>
      <li>Be consistent. When I started, all I could do was 10 girly pushups and 20 sit ups, which I struggled with, while
        waiting on the laundry. I also kept a journal so I could look back, track my habits and see how far I had come
        for inspiration. Now I can do 50 push ups, 50 pull ups and 100 bicycle-style crunches before I go to bed.</li>
      <li>Get to know all of the products that Isagenix has to offer and use them.</li>
      <li>Don’t lose sight of your goals: see it through to the end.</li>
    </ul>
    <h3>Elizabeth’s Favorite Products</h3>
    <ul>
      <li>Ageless Essentials™ with Product B™</li>
      <li>Ionix® Supreme</li>
      <li>IsaPro®</li>
      <li>IsaLean® Bars</li>
    </ul>`;
  }

  private getFrankPSuccessStory(): string {
    return `<h3>Island Native Reclaims His Paradise Lifestyle</h3>
    <p>
      Growing up in Hawaii was no paradise for Frank. Out of work and 150 pounds overweight, Frank was completely content spending
      his days sitting on the couch playing video games waiting for the right job to come along.
    </p>
    <p>
      After two years, no job and a max weight of 367 pounds, Frank’s Aunt Val offered him a plane ticket to New Jersey and the
      promise of helping him transform his life—both physically and financially. Frank couldn’t resist the offer or his
      family’s willingness to help.
    </p>
    <p>
      "On the plane ride over it was a struggle for me to fit into the seat," admits Franks. "I remember telling myself that this
      would be the last time I would ever have that difficulty." After landing in New Jersey, his aunt stayed true to her
      word and took Frank to her gym the very next day. She also introduced him to Isagenix®, got him started on his first
      30-Day Cleansing and Fat Burning System and signed him up for the IsaBody Challenge®.
    </p>
    <p>
      Frank admits the first few days were hard, but soon it was easy to pass up his routine lunch of rice and macaroni for a shake.
    </p>
    <p>
      "I didn’t want to be big anymore," shares Frank. "I didn’t want to struggle with something as simple as getting out of bed
      anymore."
    </p>
    <p>
      Two weeks in, Frank had more energy and was blasting through his workouts. Franks success set in when he stepped on the scale
      and he was 67 pounds lighter.* But, he didn’t stop there. Frank’s aunt entered him into his first-ever local race.
      Running was new to Frank, but due to his weight-loss success and daily workouts, he was able to place third in his
      age group—a huge accomplishment for Frank.
    </p>
    <p>
      "The support I receive from my family, my Isagenix team, and my fellow gym members is overwhelming," says the 2012 IsaBody
      Challenge finalist. Because of their unwavering commitment, Frank lost an amazing 122 pounds (207 pounds total) and
      103.75 inches.* "I want my journey to help motivate others," excites Frank. "I want everyone to know that if they
      want something bad enough, they can go after it and get it."
    </p>
    <p>
      Frank credits Isagenix for changing his life.
    </p>
    <p>
      "These past few months I’ve gained one of the greatest experiences of my life," says Frank. He’s even discovered a passion
      for running and registered for the Honolulu marathon in December 2012. Heading home to Hawaii will be surreal for
      Frank. Not only will he experience more wiggle room in his plane seat, but he will also get to see the stunned reactions
      of his family and friends when they see him for the first time 200 pounds lighter.
    </p>
    <p>
      "My friends still don’t believe the pictures on Facebook are me," laughs Frank. But, for Frank the biggest moment will be
      when he hugs his mom, who hasn’t seen his transformation or been able to wrap her arms around him in years.
    </p>
    <h3>Frank’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Follow the 30-Day System 100 percent and use all of the products. They’re there for a reason.</li>
      <li>Timing. I learned from Doctor Ina Nozek at a past IsaU that timing on Cleanse Days is crucial.</li>
    </ul>
    <h3>Frank’s Can-Do List of Products</h3>
    <ul>
      <li>Vanilla IsaLean® Pro</li>
      <li>IsaLean® Shake in Creamy French Vanilla</li>
      <li>IsaLean® Shake in Creamy Dutch Chocolate</li>
      <li>Ionix® Supreme</li>
    </ul>`;
  }

  private getLeanneKSuccessStory(): string {
    return `<h3>One Woman’s Commitment To Herself To Let Go</h3>
    <p>
      Leanne’s journey began the moment she realized she was in a toxic relationship watching someone she cared for deeply about
      take a severe downward spiral in life.
    </p>
    <p>
      "We had loved each other for 14 years," shares Leanne. "Best friends, soul mates, inseparable with fantastic careers and
      high hopes for our future. We were planning to have enough money to retire at 45, travel, live well, and give back
      to make a difference in the world."
    </p>
    <p>
      But, his choices would change her life; forced to sell their dream retirement home and clean out their savings account, all
      to pay back family members, creditors, and the lawyers who all worked tirelessly to fix the financial mess.
    </p>
    <p>
      Her decision to finally let go came while on vacation. "I packed my bags, got in the car and drove to the airport," says
      the Calgary resident. She got on the next available flight back home and never looked back.
    </p>
    <p>
      "The emptiness I felt on that flight home was the size of the ocean below me," expresses Leanne. "I cried the entire eight-hour
      flight home; I had lost the battle. I had fought like hell to try and save it all."
    </p>
    <p>
      Back home, Leanne was left with her thoughts. At 42, she was tired, felt unhappy and without purpose and no longer recognized
      the woman looking back at her in the mirror.
    </p>
    <p>
      "It hadn’t always been this way," recalls Leanne. "I swam at a competitive level, won medals at the Alberta Games, and was
      an award-winning synchronized swimming choreographer and coach. I remember what it was like to be healthy and fit."
    </p>
    <p>
      Leanne decided it was time to hit the gym.
    </p>
    <p>
      To get started, she called her former trainer and Isagenix® Associate Paul Anthony. Paul started her training right away
      on his Dreambody Program and his MindGym series.
    </p>
    <p>
      "Paul also suggested I start taking Cleanse for Life® to remove the toxins in my body," shares Leanne. "I was skeptical because
      I had been having good results with my healthy diet. But, I tried it and was amazed by the results—my energy was
      through the roof."
    </p>
    <p>
      In June 2011, Leanne met Lisa W. while helping Paul finalize her IsaBody Challenge photos. Inspired by Lisa’s success story,
      she joined her team with Paul and started to dabble in the products.
    </p>
    <p>
      By February 2012, Leanne was ready to take on the IsaBody Challenge.
    </p>
    <p>
      "After what I had been through, the Challenge was my choice and my challenge," shares the 2012 IsaBody Challenge finalist.
      "I stepped up my program, increased the intensity of my workouts and stuck to my nutrition plan." The ending results
      are picture perfect.
    </p>
    <p>
      Leanne lost 30 pounds and 20 percent body fat and is a 2012 IsaBody Challenge finalist!
    </p>
    <p>
      "So many overweight people are pre-judged without anyone knowing why they are the way they are," expresses Leanne. "I need
      to share my story and let them know that there is always a way out and that there is hope."
    </p>
    <h3>Leanne’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Set a target and broadcast it! I put my intention out there and I didn’t take my eye off of it.</li>
      <li>Make a vision board. I have one and I spend two minutes when I first wake up and right before bed studying it. To
        date, everything on my vision board has come true.</li>
      <li>Surround yourself with like-minded people that will support you. We all have the power to change. We must first change
        our mind. My trainer taught me that everything happens in our mind first, and everywhere else second.</li>
      <li>Track your progress and keep a diary. It’s neat to look back at a previous month and see your progress. The key is
        to analyze it, correct it and continue on with it.</li>
    </ul>
    <h3>Leanne’s Can-Do List of Products</h3>
    <ul>
      <li>IsaLean® Pro</li>
      <li>IsaLean® Shake</li>
      <li>Ionix® Supreme</li>
      <li>Ageless Essentials™ with Product B™</li>
    </ul>`;
  }

  private getLoisLSuccessStory(): string {
    return `<h3>Queensland Woman Proves Age Isn’t a Barrier and Transforms Her Life</h3>
    <p>
      As a Public Servant in the Queensland Government, Department of Corrective Services, Lois works a demanding job, fighting
      sleep at work and on the train, during her long daily commute.
    </p>
    <p>
      "Before Isagenix®, I was overweight, unfit, unhealthy and unhappy, and I hated my pear-shaped body," shares Lois. "My wardrobe
      consisted of black and navy trouser suits to try and disguise my figure. I even shied away from participating in
      sports because the team uniforms might cover less of my body than I felt comfortable with."
    </p>
    <p>
      After several fad diets and programs and liposuction that temporarily worked, Lois was wearing a size 16 for dresses and
      pants, and was at her heaviest.
    </p>
    <p>
      "I looked in the mirror and thought, ‘Life was not meant to be like this,’" says Lois.
    </p>
    <p>
      Upon Lois’ specialist’s suggestion to lose weight after her total hip replacement, Lois’ daughter, after researching several
      options, advised her to find a cleansing program and introduced Lois to Isagenix. While initially skeptical with
      no hope, Lois decided to give Isagenix a try. Today her life—and her body is completely transformed.
    </p>
    <h3>Realizing Her Potential</h3>
    <p>
      Lois began her journey with a 30-Day System™ and lost several pounds,* feeling amazing inside and out. She realized Isagenix
      was something really special and saw the potential for what she could achieve, so she decided to join the IsaBody
      Challenge® to hold herself accountable and motivated.
    </p>
    <p>
      With improvements in sleep, energy, vitality and self-confidence, Lois also noticed that she was better coping with the stresses
      of work and commuting. She even bought hand weights and began resistance exercises, and soon experienced improvement
      in muscle mass, strength and skin tone.
    </p>
    <p>
      After eight weeks, she was most astounded when she lost weight from her hips, thighs and bottom and no longer had cellulite.
      After fifteen weeks, she was down to 121 pounds.* By the end of her 16-week Challenge, she was back to size 8 in
      pants and dresses—the size she was before having children.
    </p>
    <p>
      "Considering the battle I have had for most of my life, to lose weight from my target areas, and then to achieve it so easily
      through Isagenix, brought tears to my eyes," shares Lois.
    </p>`;
  }

  private getMiriamBSuccessStory(): string {
    return `
    <h3>Make a Change for Life!</h3>
    <p>
      Miriam was feeling overweight, sluggish and under the weather. The doctors told her she needed to lose weight or she would
      suffer long-term health issues. "I used to blame my husband for having a big car because I couldn’t fit between the
      two cars in the garage. I didn’t know where to turn as I had tried so many diets that just didn’t work. I bumped
      into a school friend, Tonia P., who looked amazing. I asked her what she was doing. When she told me she had been
      using Isagenix® I asked her to sign me up!"
    </p>
    <h3>Staying Accountable</h3>
    <p>
      "I started with the IsaBody Challenge® to kick-start my weight loss. Jill B., the U.S. 2011 IsaBody Winner, was a huge inspiration
      to me. I began on the 30-Day Program and stayed focused on achieving my goal. After only four days I started feeling
      better and losing weight. It took me just three months to achieve my goal weight. I have more energy, I’m sleeping
      better and don’t feel invisible anymore. I can wear the clothes I want, I’m confident and feel amazing."
    </p>
    <h3>Life Change</h3>
    <p>
      "It wasn’t until I saw my ‘before’ and ‘after’ photos that it really sunk in how much I had achieved. I’m never going back
      to how I used to be! Now I feel like I fit in, I’m confident and comfortable in my own skin. I’m now a certified
      personal trainer and feel better than ever! My husband has lost 33 pounds* and our family is committed to Isagenix
      for life."
    </p>`;
  }

  private getPatriciaHSuccessStory(): string {
    return `
    <h2>IsaBody to IsaBusiness</h2>
    <h3>Before Isagenix</h3>
    <p>
      Trish was feeling unwell, tired and uncomfortable. "I would never let anyone take a full length photo because I hated what
      I saw." She tried many different ways to shift the weight but nothing seemed to work.
    </p>
    <h3>IsaBody Journey</h3>
    <p>
      “When Paul and Suzanne introduced me to Isagenix, I grabbed the opportunity with both hands. Not long after joining Isagenix,
      I signed up to the IsaBody Challenge®. The competition was a huge motivator for me. I had friends join the competition
      with me for support; I used the podcasts (IsagenixPodcast.com) and got lots of encouragement from the Home Office.
      I started a 9-Day System within the 30-Day System and the weight started to drop off. After just 30 days I gained
      energy, could sleep better and felt great. I lost 33 pounds* during the IsaBody Challenge and now fit into clothes
      that have been in my wardrobe for years — I’m so proud of myself!”
    </p>
    <h3>Starting a Business</h3>
    <p>
      “I always planned on starting the Isagenix business but I needed to gain the confidence and prepare myself to become a full-time
      network marketer. Once I finished the IsaBody Challenge and became a product of the product, I had all the confidence
      I needed. I’m now committed to Isagenix and take consistent persistent action every day to achieve my goal. I’m 150%
      dedicated to Isagenix.”
    </p>
    <h3>Tips for Success</h3>
    <ul>
      <li>Get informed. Go to the meetings to improve your understanding of the products.</li>
      <li>Absorb yourself in the business.</li>
      <li>Commit to 90 days on the products.</li>
      <li>Eat the frog every morning — do the things you don’t like doing in the morning then you can move onto things you
        enjoy.</li>
      <li>Use the ‘New Associate Interview and Commitment Sheet’ — this gives you a good understanding of what your new person
        is focused on.</li>
    </ul>`;
  }

  private getRebekahHSuccessStory(): string {
    return `<h3>IsaBody Runner-Up Finds Her Key to Success!</h3>
    <p>
      Since university, Rebekah H. has struggled with her weight. When she became a busy mum her health simply went on the back
      burner.
    </p>
    <p>
      "I didn’t realize just how unhealthy I was. My sisters were always skinny but not super healthy, so when I saw the transformation
      they had with Isagenix I knew I had to try the products. I had given birth to my second child and wasn’t feeling
      my best so my sisters suggested I try Cleanse for Life as a way of resting my body. After a short time I saw the
      extra weight start melting away.
    </p>
    <p>
      This is when my sister Kelly suggested I join the IsaBody Challenge®. Wow what a change! I had tried many diets before where
      I would just ‘yo-yo’ up and down but within a month of starting the IsaBody Challenge I felt fantastic! Over the
      challenge I lost a total of 37 pounds* and in total I have lost 51 pounds* with Isagenix, which means I’m back to
      my high school weight!
    </p>
    <p>
      The IsaBody Challenge kept me motivated by giving me a goal to focus on and an incentive to help me keep going. It has helped
      me get my body and my life back on track. I now enjoy exercising with my family and my short-term goal is to compete
      in a family marathon where I push the pram up a five-mile hill.
    </p>
    <p>
      I can now share clothes with my sister again. The best reward of all is that Isagenix allows me to help others gain a new
      healthier lifestyle and in turn I’ve started to build a residual income."
    </p>
    <h3>Rebekah's IsaBody Success Tips</h3>
    <ul>
      <li>Focus on your goals whether they’re fitness, youthful aging, bulking up or losing weight. It will help you stay motivated.</li>
      <li>Help others stay motivated. If you have an accountability partner you can help each other. The feeling of responsibility
        will help you achieve your own goals.</li>
    </ul>`;
  }

  private getTiffDSuccessStory(): string {
    return `<h3>Utah Teacher Turns Lesson Plan Into Action Plan</h3>
    <p>
      Tiff is an avid athlete whose "controlling spirit" proved she was strong enough to play with the big kids.
    </p>
    <p>
      "My passion earned me four varsity athletic letters, an athletic scholarship to a prestigious college, a bachelor’s degree
      in mathematics and secondary education, and a scholarship to graduate school in Washington, D.C," shares Tiff, a
      middle and high school teacher for the Jean Massieu School of the Deaf in Salt Lake City, Utah.
    </p>
    <p>
      She knew she was ready to take on the world.
    </p>
    <p>
      But, days after Tiff graduated from college she would experience a traumatic event that would send her both mentally and
      physically spiraling out of control. As a result, Tiff spent several weeks confined to her home.
    </p>
    <p>
      "I had lost all control of my mind, my life, and consequently my body. The once strong and determined athlete that resided
      within the walls of my dilapidated frame was longing to be found," admits Tiff. "I just wanted to return to the days
      when I was healthy and active."
    </p>
    <p>
      As fate would have it, Tiff’s weight gain would aggravate an old injury, forcing her to contact her old trainer and Isagenix
      Associate Aaron.
    </p>
    <p>
      "What I thought would be just a few training sessions turned into much, much more," shares the Utah resident. "Somewhere
      along the way of rehabbing my injury, I was reminded of when Aaron first introduced me to Isagenix and cleansing
      years ago."
    </p>
    <p>
      Eager to get the same spiritual and mental clarity she experienced in 2006 from cleansing with Isagenix, Tiff joined a second
      time.
    </p>
    <p>
      At the same time, Aaron was rallying Associates to join the 2012 IsaBody Challenge®. Tiff, reluctant at first, decided to
      sign up for extra motivation.
    </p>
    <p>
      After 24 weeks of early morning wake-up calls and high-intensity, 1,000-calorie burning workouts, Tiff is 32 pounds lighter*
      and has just 13 percent body fat.* She was named a finalist in the Challenge and is in better shape now than she
      was as a collegiate athlete. She’s even taken her love for exercise outdoors as an extreme athlete partnering with
      her trainer on adventure races—a multidisciplinary race that can last a few hours or several days, covering up to
      100 miles. She says joining the Challenge was the motivation she needed to make a real transformation.
    </p>
    <p>
      "I needed to reinstate my sense of control and determination," says the 2012 IsaBody Challenge finalist. "I decided to do
      the Challenge not for the money, the cruise or to get a six-pack; I did it to show I could be in control of my life—that
      I was stronger than my mind."
    </p>
    <h3>Tiff’s Tips for Weight Loss and Health Success</h3>
    <ul>
      <li>Have a goal. Without direction you are more apt to veer off course.</li>
      <li>Have a plan. It is far easier to stay on course and hold yourself accountable when you have something in writing.</li>
      <li>Have a support system. Ask your sister, get a trainer but surround yourself with people that understand what you
        are doing and will push you when times get hard.</li>
      <li>Have faith. Everyone has bumps in the road. My trainer calls them "Everest moments" because many climbers who reach
        the saddle of Mt. Everest and are too tired to push forward just turn back. Don’t give up; you CAN do this.</li>
    </ul>
    <h3>Tiff’s Favorite Products</h3>
    <ul>
      <li>Ionix® Supreme</li>
      <li>IsaLean® Shakes</li>
      <li>Cleanse for Life®</li>
      <li>Vanilla IsaLean Pro</li>
    </ul>`;
  }
}
