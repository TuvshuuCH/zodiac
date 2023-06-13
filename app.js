const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send([{
        zodiacName: 'Aquarius',
        description: 'Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians do not like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they are a fixed sign, they may not necessarily believe they are the "same" people they were when they were born.  Aquarians have a strong sense of social justice and making the world a better place, and see themselves as just one link in an endless human chain. They are very concerned about others, not because of how others treat them or how they want others to treat them. Aquarius is intellectual and analytical, but do not mistake these attributes for aloofness. Aquarians have deep passion, but they know jumping into something too quickly can cause more harm than good. Aquarians are often big-picture thinkers who can see connections in a way that eludes others. Aquarians have energy, warmth, and a deep desire to get things done. They feel they are on the planet to change the world and they will do so. Aquarians are idealistic, and will never accept "good enough" until they truly believe it is good enough. Aquarians can sometimes seem as if they do not care about their individual relationships, or they are holding something else at a higher value. For example, an Aquarian may cancel a date at the last minute because a friend or family member is stuck and needs a ride. It is not personal, and it is not a bad thing. An Aquarian has a value system that is constantly prioritizing the people who need them the most, and sometimes, that puts the people they love in a lurch. Clear communication is necessary to avoid these issues. Their belief in the innate goodness of people. An Aquarian will never doubt you, even when you doubt yourself. Their ability to see the best in all people, even if people do not see those qualities in themselves. Aquarians can lift people up, lightening the mood in the process.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/10/zodiac-sign-4374415_640.jpg'
    },
    {
        name: 'Pisces',
        description: 'Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces "knows" things from deep within, and can often judge whether a person or situation is good or bad. That does not mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces? Pisces signs are sensitive, and get along well in small groups of people. Sometimes, a Pisces may feel like they have an internal and external self, and they may need to spend a lot of time solo to recalibrate those two halves of themselves. A Pisces is rarely lonely when they are by themselves, and have an active imagination. Creative, Pisces love spending time reading, exploring or creating art or music, and understanding their emotions through art. Those with the Pisces sign may seem quiet but they are incredibly strong and have a very strong sense of right and wrong. Their moral compass, along with their gut, guides them well. When a Pisces speaks up, people listen. Pisces tend to take in everything around them, and they are great people to ask for advice on pretty much anything. While Pisces has strong convictions about the best way for them to live, they have a "live and let live" approach when it comes to others, and are accepting and nonjudgmental of all. The realization that life is so much more than what we see. Pisces sign is in tune with the magic of everyday existence and can find beauty in all situations, even ones that may cause tears. Recognizing these moments of beauty and being able to share them with others is what makes Pisces a creative sign, and is also what makes Pisces a soulful sign. ',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/10/zodiac-sign-4374416_640.jpg'
    },
    {
        name: 'Aries',
        description: 'An Aries sign will always tell you what they are thinking, with a frankness that may occasionally border on rudeness. But even if an Aries seems overly blunt with their opinion, that is only because Rams value honesty above all else. And it works both ways. While an Aries may be the first to say if they think that you just phoned in a project, they will also be the first to compliment you for a job well done. Rams may also have a short fuse. That fiery temper can be an asset. When an Aries is angry, they will never play the passive-aggressive card. But for people who do not know them well, their temper can be a turn off. Learning how to work out their anger—whether by going to the gym every day, taking some deep breaths, or learning to chill before they Tweet their thoughts to the world—is a lifelong process for Rams.When it comes to love, Aries signs are all about initial attraction. They can sense chemistry in the first sentence uttered by a potential partner. Forthright and unabashed, an Aries will do everything in their power to go after someone they want. Sometimes, they need to learn how to slow down and foster long-term connections. Fireworks are fun, but they do not necessarily make a great match. Aries are amazing lovers: versatile, passionate, and always invested in the moment.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374404_1280.jpg'
    },
    {
        name: 'Taurus',
        description: 'With a rep as one of the hardest-working signs in the Zodiac, a Bull is never afraid to roll up those sleeves and get to work, and will not blink an eye at pulling an all-nighter to get the job done. But it is not all work for a Taurus sign. Anchored by the earth, this passionate sign is all about sensuality, and is always seeking out pleasure. Whether they are indulging in luxurious massages, spending hours in bed with their lover, or going on a long run, Taureans love feeling present in their body and frequently need to get in touch with their physical self. When it comes to love, Taureans are all about honesty, which is why a first date with a Bull may resemble a job interview. They are not being rude—they are built for partnerships and are simply trying to see if you are a good fit at the start. And once you begin dating a Taurus, forget about white lies. A Taurus would much rather hear that an outfit is unflattering than endure hollow compliments. Taurus will hold a grudge against someone who lies, even if it is a lie just to make them feel happy. In bed, Taurus is a giving lover—as long as their partner steps it up and makes sure to give as well as receive pleasure! Detail-oriented Taurus may seem nitpicky (even in the bedroom, a mid-romp critique may not be unusual), but that is not because they want to offend. They simply demand the best, and they expect the people in their life to deliver.While Taurus signs have an intense internal drive, they sometimes have trouble respecting authority, especially if asked to do something they think is pointless or should be done differently. Learning to be flexible and go with the flow can be an advantage to Taurus. And while Taureans have a rich internal life, they value external attributes and may overlook someone who does not have the perfect outfit, car, or resume. Learning the benefits of getting to know someone before writing them off can be a lifelong lesson to a Taurean, especially in love, where they might be too hasty to write off a perfect match.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374405_640.jpg'
    },
    {
        name: 'Gemini',
        description: 'Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they are also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac is most emotionally intelligent signs. Energetic and quick-witted, Gemini never gets stuck in the past and does not ruminate on what might have been. Instead, they move forward with glass-half-full optimism and an ability to always look on the bright side—and land on their feet—in nearly any situation. With a mind that is constantly racing, even when they are just quietly hanging out, the Twins never get bored. In fact, Gemini are happy keeping their own company, and can often turn their solitary daydreams into reality. Gemini signs are in love with love, and they adore the ritual of it all, from those do they like me? butterflies to the anticipation of a back-and-forth text volley. Gemini loves dating, and the world loves Gemini. But a Gemini will eventually settle down, because this sign is incredibly loyal and steadfast once they have chosen a partner. Let is be clear, though: Steadfast is not a code word for boring. Gemini always love to keep things fresh and are happy to try almost anything in the bedroom. They are proud of their sexuality and depend on frequent physical check-ins to keep them grounded in their body. To them, sex is a celebration of life, and Gemini loves both sex and life.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374407_640.jpg'
    },
    {
        name: 'Cancer',
        description: 'Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancer signs may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life. Most Cancer signs have been called psychic at some point, and with good reason—Cancer can often intuit relationships, ideas, and motivations before anyone has actually spoken. That can make for challenging interactions with this sign—Cancer hates small talk, especially when it contains white lies (like saying, "How nice to see you!" when it is clear that both parties would rather avoid each other). That is why social gatherings can be overwhelming for Cancers. They would much rather spend time in small groups where everyone is on the same page. In romance, Cancer is a giving and generous lover and expects the same in return. The Crab is above mind games and hates the thrill of the chase—if you love someone, why not say it now? It is not uncommon for Cancer to fall into committed love after just a few days or weeks, and even though that decision is sudden, it can easily last a lifetime. Cancers tends to be happiest when they are part of a pair, and the best relationship brings out their greatest traits. But even though a Cancer thrives in a duo, he or she also has an independent streak, and needs plenty of time to do things solo. This sign has an active internal life, and is often are happy living in the realm of imagination. Sometimes Cancers need help from one of the more grounded signs to make their dreams a reality. Cancer loves creating and needs some type of creative outlet, whether it is painting, writing, or even just reading. Cancer also loves connecting to a higher power, and may find comfort in religion or spiritual practices. And even though Crabs can be intense, they also have a funny side with a wry sense of humor, and they are adept at observing and mimicking people around them.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374406_1280.jpg'
    },
    {
        name: 'Leo',
        description: 'Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they are proud of them. They do not believe in false modesty and will be the first to praise themselves for a job well done. But Leo is not self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader. But it is not all hard work for Lions. Intense and energetic, Leos thrive on social interactions and have no problem making friends—although pinning them down to spend time with you is another story. Leos put themselves first, and will turn down a plan that doesn not fit with their agenda or idea of fun. This trait has gained them an unfair reputation for arrogance. But on the flip side, when a Lion chooses to spend time with you, it is genuinely because he or she wants to. Leo signs are passionate in all pursuits, including relationships, and take it upon themselves to be the best partner you have ever had. They love grand gestures, and they want to show the world how attentive and caring they can be. They also can not resist flashiness and often buy their partner the biggest and best presents. Leo is an adventurer, seeking to balance an intense life of social obligations and travel with plenty of downtime to relax and luxuriate. Work and outward appearances matter to this sign, and they are willing to do whatever it takes to gain a job title or workplace status, even if it means temporarily sacrificing their precious leisure time. Benevolent with their time and attention, Leos are never cliquey, always showing friendliness and politeness to everyone. While almost everyone else is entranced by the Leonine personality, Leos are their own harshest critic and consider each day a challenge to be the best, brightest, and boldest Lion they can be.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374408_1280.jpg'
    },
    {
        name: 'virgo',
        description: 'Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they are going to do today is not a drag it makes them feel in control and secure. Virgo has a rich inner life, and can sometimes seem shy at first meeting. A Virgo will not spill secrets right away, and it is important to earn a Virgos trust. But once you do, that Virgin will be a friend for life. And if you think that you are dating a shy Virgo, trust that those walls will fall down in the bedroom. One of the most passionate signs, Virgos specialize at connecting to their physicality, and this earth sign loves and celebrates physical connection with their partner. Virgos expect perfection from themselves, and they may project those high standards on the other people in their life. A Virgo hates when someone lets him or her down, even if it is minor and unavoidable, like a last-minute cancellation. Virgo signs never want to disappoint the people in their lives, so they may spread themselves too thin put themselves last. Virgo signs love and are inspired by beauty. They consider what they wear and how they decorate their house to be an extension of their personality. They thrive when everything in their life looks Pinterest-perfect, and although their friends make fun of their penchant for organizing, it truly is the anchor that makes Virgo is life run smoothly. Intelligent and a lifelong learner, Virgo loves trying new things, reading books, and learning about the world. They will happily sign up for an adult-education course, and they consider an afternoon in bed with a book pretty much ideal. A Virgo prefers an evening with good friends to a huge party, and values downtime just as much as socializing. This sign does not need to fill their calendar to be content.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/03/zodiac-sign-4374409_640.jpg'
    },
    {
        name: 'Libra',
        description: 'Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they are always happiest with a large group of friends, family, and coworkers on whom they can count. An air sign, Libra can often be up in the clouds and while he or she is amazing at making big plans, follow through can be tricky. Working with detail-oriented signs, like Virgos or Capricorns, can help Libras actually manifest their dreams into reality, especially in the workspace. But do not call out Librans for daydreaming—their imagination is one of their biggest assets, and they often put their imagination to work by finding careers in the arts or in literature. Libras believe that they are directing their own lives, and they take a big-picture approach in making that life look and feel the best it can be. They spend a lot of time figuring out what is missing from that big picture, and they may feel unhappy if they become too focused on one thing, whether it is work, a partner, or a family member. Librans are at their best when they balance their schedule to include plenty of time for self-care rituals and personal pursuits, and when they give themselves enough flexibility to change focus. When Libra falls in love, he or she falls hard, but this sign also recognizes that there is room for more than one grand love in his or her life. The Scales are pragmatic about love, realizing that different relationships often have different seasons. Librans can sometimes be accused of being too pragmatic, and they have been known to call off a relationship pre-emptively if they feel it may not work due to distance, age difference, or another external conflict.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374411_640.jpg'
    },
    {
        name: 'Scorpio',
        description: 'Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpio signs make a statement wherever they go. They love debates, are not afraid of controversy, and will not back down from a debate. They also hate people who are not genuine, and are all about being authentic—even if authentic is not pretty. Because of all of these traits, a Scorpio can seem intimidating and somewhat closed off to those who do not know them well. But what people do not realize is that even though Scorpio may seem brusque, as a water sign, they also are very in tune with their emotions, and sometimes may find themselves caught up in their feelings. This leads to Scorpio is central conflict: Their feelings are what drives them and strengthens them, but their mutability can scare them and make them feel vulnerable and out of control. Because of this conflict, Scorpios, like their namesake, the scorpion, put up an outer shell and may seem prickly. But once people get beyond the shell, they find a loyal, loving person whose passion knows no bounds. Scorpio dives into all life has to offer with 110% enthusiasm. A Scorpio will be your most loyal friend, most dedicated employee—and your worst enemy, if they want to be. In love, Scorpio can seem cautious at first, and may set up a series of "tests" for their potential partner, deciding to cross them off their list if they do not meet their demands. The trouble is, they tend to keep their partner out of the loop on what, exactly, they want, making their partner feel like they have to play mind reader. If a Scorpio and their partner can get past this initial hurdle, the connection will be intense, in both highs and lows. A Scorpio will love harder and fight harder than any other sign, and wants their partner to be absolutely honest. They will be—even if it is not what the partner wants to hear. In the bedroom, Scorpio is generous, imaginative, and always up for anything—all night long.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374412_1280.jpg'
    },
    {
        name: 'Sagittarius',
        description: 'Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie. Sagittarius is open-hearted, generous, and big-spirited, but Sagittarius is always truthful. Because of this, they may hurt others’ feelings, or may be called out for not having tact or empathy. The latter is not true. With their keen imagination, Sagittarius is adept at putting themselves in another person’s shoes—that’s why so many Sagittarius are successful actors—but they do not feel the need to beat around the bush or lie. You can trust a Sagittarius to tell you what they really think. You can also trust a Sagittarius, period. Unlike other signs, they won’t spill any secrets. In bed and in relationships, Sags are adventurous and giving, able to adeptly try new things or break down barriers. In bed, Sags love trying new positions, new toys, and making everything an adventure. Yes to the lights on; yes to lovemaking outside. In relationships, Sags will be honest and true to themselves, and that may mean that they will move on from a relationship. If it’s not working, it’s not working, and a Sagittarius won’t stay for the sake of another person’s feelings. A Sagittarius will always be honest and in check with their emotions, and a Sagittarius will not engage in emotional blackmail. Sagittarius is a steadfast friend and a creative thinker; a great person to have on a work team, as they have infectious energy and enthusiasm. They aren’t looking for constant feedback, and can take a project and run with it. A Sag can also be an adept entrepreneur or CEO. A Sagittarius is smart, capable, and a true trailblazer.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374413_640.jpg'
    },
    {
        name: 'Capicorn',
        description: 'Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave. Natural rule-followers, Capricorns thrive on order and love strict rules, hierarchies, and set ways to do things. Can a Capricorn sign think outside the box? Yes, they can, but they prefer when they have strict boundaries to constrain against—free reign can make them feel paralyzed by choice. Capricorns are great at climbing the corporate ladder, and especially adept at making (and investing) money. Capricorns love family, and put a lot of stock in traditions. A Capricorn might stress themselves out trying to do everything perfectly—a Capricorn may feel like they must present a home-cooked meal every day, and would never admit to doing drive-thru or takeout. Capricorns believe presentation is everything, and their homes are usually Insta-worthy. A Capricorn sometimes is overly focused on what things look like, instead of how things feel, which could cause them to feel stifled and unhappy. Capricorn needs to find a firm sense of self beyond how others perceive them, and recognize that racking up achievements is only one small part of their personality. Capricorn signs are loyal friends, and have a funny and sly sense of humor when you get to know them—it is fun drawing them out of their shells. In love, Capricorn is a true partner, who is laser-focused on helping their partner find success and happiness. A Capricorn will dive into a relationship like a job, and believes that hard work can help make a bond as strong as possible. While sometimes a romantic conversation may veer toward feeling a bit like a board meeting, especially with action items and improvement plans, but if you roll with it, they have a point: Your bond will be stronger.',
        image: 'https://cdn.pixabay.com/photo/2019/07/31/06/09/zodiac-sign-4374414_640.jpg'
    }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})