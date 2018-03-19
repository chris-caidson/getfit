import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class Person_2007Provider {

  constructor(private sanitizer: DomSanitizer, ) {

  }

  public getSuccessStory(userId: string): SafeHtml {
    let htmlString: string;

    switch (userId) {
      case "adam-v": htmlString = this.getAdamVSuccessStory(); break;
      case "daniel-m": htmlString = this.getDanielMSuccessStory(); break;
      case "david-g": htmlString = this.getDavidGSuccessStory(); break;
      case "david-w": htmlString = this.getDavidWSuccessStory(); break;
      case "derek-z": htmlString = this.getDerekZSuccessStory(); break;
      case "dina-m": htmlString = this.getDinaMSuccessStory(); break;
      case "donna-o": htmlString = this.getDonnaOSuccessStory(); break;
      case "eric-and-amber-h": htmlString = this.getEricAndAmberHSuccessStory(); break;
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  private getAdamVSuccessStory(): string {
    return `<h3>Finding the Right Recipe for Success</h3>
    <p>
      When people ask what my typical meal was in the past, I tell them it consisted of a pizza, two-liter bottle of soda and gourmet
      ice cream. Sadly, I think many people can relate to this. Not only was eating fast and unhealthy food easy, it tasted
      good. I woke up one day and decided it was time to become cleaner and leaner. In order to succeed in losing weight,
      I knew that simplicity and flavor were important factors in whatever plan I followed. I sought out Isagenix as the
      tool to help me begin a journey to better health.
    </p>
    <p>
      Here I am today, 60 pounds lighter* and released from my physical and emotional prison! As the third-place winner of the
      2007 IsaBody Challenge, I’m on the road to a much better life. The products taste good and the Isagenix Cleansing
      and Fat Burning System is so easy to follow—you can’t lose!
    </p>
    <p>
      My heartfelt desire to help others has now kicked in. I’ve become a certified personal trainer and nutritionist and am teaching
      others how to transform their bodies with the right tools. Improving myself was step one. Helping others to improve
      their lives is a consistent step two. I now have the recipe for success and am thrilled to share it with everyone!
    </p>
    <h3>Tips for Weight-Loss and Health Success</h3>
    <ul>
      <li>Start a cleanse. There’s no reason to try and get fit if the body isn’t performing at optimal condition. I cleanse
        on a regular basis, as needed. I start each day with an IsaLean® Shake. I balance my meals and try not to over
        indulge. I have a regular exercise program and I drink lots of water.</li>
      <li>Be comfortable with your body type. Know which body type you are so that you don’t try to do the impossible. My body
        type is meso-morphic. This means that my body responds quickly to healthy eating and exercise. The other two body
        types have their own advantages so get to know them and use that knowledge!</li>
    </ul>
    <h3>Adam's Favorite Products</h3>
    <ul>
      <li>IsaCrunch™</li>
      <li>IsaDelight™ because they make Cleanse Days something to look forward to.</li>
      <li>Ionix® Supreme. I usually mix an ounce in my shake every morning and I don’t feel so fatigued all day long.</li>
    </ul>`;
  }

  private getDanielMSuccessStory(): string {
    return `<h3>Isagenix is My Helicopter, Raising Me to a Longer and Leaner Life</h3>
    <p>
      I relate my Isagenix experience to a story I once heard. In this story, a man is trapped on his roof during a flood and prays
      for help but drowns. When he gets to heaven, he asks why he was not rescued and is told there was a canoe, rowboat
      even a helicopter—what else did he want?
    </p>
    <p>
      This story definitely symbolizes my struggle with weight. No matter how much help and support I was receiving in order to
      get my life back, it was never enough to truly pull me out of an unhealthy lifestyle. I learned about Isagenix, and
      although skeptical, went to a meeting to learn more. I returned home feeling like I had not only found a canoe, but
      also a helicopter.
    </p>
    <p>
      The 2007 IsaBody Challenge came at the perfect time for me. It was the extra push I needed to drop weight quickly. I lost
      over 60 pounds.* I have 60 more pounds to go before achieving my goal weight and am looking forward to maintaining
      it from then on.
    </p>
    <p>
      No longer are everyday tasks a struggle for me. Now all I have to do is share this story of stress-free weight loss to help
      others. I know that Isagenix is my helicopter to a longer and leaner life. I hope to pick up many other people along
      the way and drop them off at their happy endings.
    </p>`;
  }

  private getDavidGSuccessStory(): string {
    return `<h3>IsaBody Challenge Winner Gets His Game Back</h3>
    <p>
      “Mirror, mirror, on the wall, who’s the healthiest of them all?” It was not me. At 295 pounds and sporting a size 44, I had
      reached a point where I could no longer look in the mirror and like what I saw. The misery I felt about my size was
      adversely affecting every part of my life from work to play and dating.
    </p>
    <p>
      At work I couldn’t escape my weight issues. One day a co-worker came into my office when I was eating and said, “You’re always
      eating.” That simple comment made me realize how often I was indulging in food. I became depressed.
    </p>
    <p>
      I love playing basketball but always had a hard time keeping up. Other players would make fun of how slow I was. They would
      pair me up with fast players so they had a better chance of winning.
    </p>
    <p>
      My social life was also suffering. I noticed that my best friend was getting all the dates. The girls always seemed to pick
      him and I couldn’t stand how it made me feel. It broke my heart.
    </p>
    <p>
      One day my mother told me that she was participating in the IsaBody Challenge. Suddenly I had the urge to join her and have
      been a diligent Isagenix user ever since.
    </p>
    <p>
      I noticed increased energy right from the start. Within the first few days, I began feeling a tightness in my stomach. I
      knew it was working! A few weeks later I’d lost significant weight in my face, and, as an added bonus, my basketball
      game was back. I had no idea I could get results this quickly.
    </p>
    <p>
      I lost 90 pounds.* These days, I no longer avoid my reflection. Now I look in the mirror and like what I see. “Mirror, mirror,
      on the wall, who’s among the healthiest of them all?” Without a doubt, it’s me!
    </p>`;
  }

  private getDavidWSuccessStory(): string {
    return `<h3>Couch Potato Becomes Marathon Runner in Just 15 Weeks</h3>
    <p>
      Now that I am the proud winner of the 2007 IsaBody Challenge for men ages 18-39, Isagenix is my first food of choice. I lost
      73 pounds!* Isagenix was my chance to get my life and health back and I completely embraced that opportunity.
    </p>
    <p>
      Desperately out of shape, obese and often found lounging on the couch, I realized my dietary choices were to blame for my
      general malaise in life. Isagenix gave me the discipline and guidance I needed to regain my energy and athleticism.
      Instead of watching TV in my downtime, now I walk, jog or bicycle with my family. I feel so good that I’m training
      for a marathon this year.
    </p>
    <p>
      To wake up each morning energized and refreshed is a feat I thought I could never reach. With the help of Isagenix I have
      the means to continue on this path. I enjoy the support Isagenix and fellow Associates have provided me, including
      a variety of ways to use the products and an exercise routine that complements nutritional cleansing.
    </p>
    <p>
      The day of reckoning was at hand, and I knew I had to do something. I was lucky to find Isagenix. No matter who you are,
      you can achieve the same level of success that I have. Give it a try. You’re worth it!
    </p>`;
  }

  private getDerekZSuccessStory(): string {
    return `<h3>The Knife, Fork and Spoon Dilemma</h3>
    <p>
      As a middle–aged man, I realized that I had some serious changes to make in order to live a fuller, healthier life. The 2007
      IsaBody Challenge came at an ideal time for me. I had suffered from a self–proclaimed dilemma that needed to be resolved.
    </p>
    <p>The wake–up call happened when I looked in the mirror and saw the abuse I’d put my body through in recent years. I
      had what I called a serious”knife, fork and spoon dilemma.” I couldn’t stop eating and had a strong sweet tooth.
      No matter what anyone tells you, a Slurpee® a day does NOT keep the doctor away.</p>
    <p>A friend of mine was an avid believer in nutritional cleansing and was already on the Isagenix Cleansing and Fat Burning
      System. I noticed his vigor and energy and started on my first Isagenix system weighing in at 300 pounds.</p>
    <p>My weight melted, snoring ended, energy skyrocketed—and these were just the noticeable results I experienced immediately!
      It was easier for me to concentrate and to function in everyday situations. I didn’t feel like I was snapping, crackling
      and popping just from walking up a staircase. Although I don’t have much faith in statistics alone, I’m proud of
      my weight—217 pounds* and dropping.</p>
    <p>With all the stamina I’ve regained, I can rejoin the Masters Badminton Circuit, a true passion of mine. I don’t know
      how Isagenix came up with this phenomenal way to cleanse and rejuvenate the body, but I’m sold on it for life—200
      pounds or bust!</p>`;
  }

  private getDinaMSuccessStory(): string {
    return `<h3>Women’s Author Becomes Her Own Success Story With Isagenix</h3>
    <p>
      At the age of six, I sang and danced in talent shows and usually won. At age 16, I played tennis in amateur tournaments.
      At age 21, I became a swimsuit model.
    </p>
    <p>
      When I was 27, I quit modeling and gained weight. I yo-yo dieted for years but continued to gain weight even while working
      out regularly. After having an emergency surgery, I was advised not to exercise. Six months later I threw out my
      left knee twice and pulled a hamstring. I felt like a disaster.
    </p>
    <p>
      As a 2007 IsaBody Challenge winner, I shed 41.5 pounds, 47.25 inches and five dress sizes.* My health is excellent again.
      I feel strong and capable. My stress has disappeared and I can kneel in church without pain. I can even go to spin
      class for 30 minutes without getting winded. I look forward to playing tennis and wearing swimsuits again.
    </p>
    <p>
      Never before have I craved anything. Now I crave water, Ionix Supreme®, IsaLean® Shakes and Snacks!™ — which make me feel
      terrific. With Amped Hydrate® I don’t experience a low spot in the afternoon. I love cleanse days; they make
      me soar.
    </p>
    <p>
      Now that I am healthier and getting leaner, I can positively motivate others to reach their health and weight-loss goals.
      I never thought it would be so easy to get back into shape. I have renewed energy to keep up with my granddaughters.
      My son and daughter-in-law are proud of my vitality and passionate attitude.
    </p>
    <p>
      As an author of four books on successful women, I now have my own success story to share.
    </p>`;
  }

  private getDonnaOSuccessStory(): string {
    return `<h3>Donna Finally Conforms to Her Form</h3>
    <p>
      It’s hard for me to go back in my mind to a time before Isagenix. I know for sure that I was irritable and lacked energy.
      I am the sole provider for my growing family, and have often felt the weight of the world resting on my shoulders.
      I did have one confidant who was there for me to provide comfort no matter what—food. Compulsive eating was indeed
      my sanctuary, but it only caused me more emotional distress. It was a vicious circle, as round as my body had become.
    </p>
    <p>
      One day I was eating lunch with a friend and noticed her exuberance. I remember thinking, “I’ll have what she’s having!”
      That was Isagenix, so I signed up to try it. Now I’m 15 pounds and 24 inches lighter.* This contest, offered by Isagenix
      for the first time in 2007, motivated me to get my life in order and no longer accept my body the way it was.
    </p>
    <p>
      These days, I can be found playing actively with my grandson, getting deep, restful sleep and exhibiting a youthful glow
      at home and work. Getting dressed is once again a pleasure, not a chore. I start my day with a lift in my walk and
      a huge smile. I experienced a reincarnation as an optimistic, spirited person.
    </p>
    <p>
      It’s strange how I didn’t realize that my poor body image was causing a downward spiral in other parts of my life. My new,
      balanced body, mind and spirit have shaped the way I live. Isagenix has given me the body I want to live in.
    </p>`;
  }

  private getEricAndAmberHSuccessStory(): string {
    return `<h3>The Hootons Like the Looks They Get Now</h3>
    <p>
      Struggling with different health problems during our lives left us both feeling insecure, inactive and wanting something
      better for ourselves. We had taken minimal action against our weight struggles separately, but together we’re now
      able to achieve anything we put our minds to with the help of Isagenix.
    </p>
    <p>
      I was introduced to Isagenix five years ago and realized this was the way to have people look at me in a positive light,
      rather than the dreaded looks I would get from being obese. I lost over 30 pounds* and felt so good again that I
      started to date. Two years ago I fell in love and married Eric and we now have a 1–year–old son. After our son was
      born, I refocused on my health goals and losing some of the extra weight I gained during my pregnancy.
    </p>
    <p>
      The 2007 IsaBody Challenge was the perfect opportunity for my husband and I to get healthy and back in shape. Eric was skeptical
      about trying Isagenix, but because of my previous weight loss success he committed to staying on the products and
      working hard.
    </p>
    <p>
      Together we lost nearly 80 pounds.* Eric takes his “before” pictures pretty hard, but is thrilled about all that we have
      accomplished together. The healthy promise we made to ourselves turned into a new commitment to each other and our
      family. Having a new baby to worry about makes our dedication to good health and a cleaner, leaner life even greater.
      I thank Isagenix every day for giving me my life back and for helping my husband.
    </p>`;
  }
}
