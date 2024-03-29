import React, { Component } from 'react'
import Newsrow from './Newsrow';                                                                    
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscontainer extends Component {
  static defaultProps = {
    category :'general'
  }
      NewscontainerPropTypes ={
        category : PropTypes.string  
      }
  constructor(){
    super();
    this.state ={
      article : [],
      loading : false,
      page: 1,
      totalResults:0
    }
  }
  async componentDidMount(){
    this.props.setprogress(10);
    console.log("cdm");
   // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6`;
    this.props.setprogress(40);
    this.setState({loading:true})
    //let data = await fetch(url);
    let Data ={
      "status": "ok",
      "totalResults": 35,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Baltimore bridge collapse: Divers find two bodies in submerged truck - BBC.com",
          "description": "Searches continue for four other people missing after two bodies are found in a submerged truck.",
          "url": "https://www.bbc.com/news/world-us-canada-68679930",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7231/production/_133033292_gettyimages-2107856156.jpg",
          "publishedAt": "2024-03-28T07:25:56Z",
          "content": null
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Perry Stein",
          "title": "Judge says Hunter Biden lawyers presented no evidence tax charges are political - The Washington Post",
          "description": "Attorneys for the president’s son presented in court more than a half-dozen motions to get the tax case dismissed.",
          "url": "https://www.washingtonpost.com/national-security/2024/03/27/hunter-biden-california-tax-case/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/S4ENDLPVEF57KIYVC7T52GQW64.JPG&w=1440",
          "publishedAt": "2024-03-28T04:49:00Z",
          "content": "LOS ANGELES Lawyers for Hunter Biden urged a federal judge on Wednesday to dismiss the nine tax charges filed against him, arguing that prosecutors botched some facts of the case and allowed politics… [+6478 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Reuters",
          "title": "Nearly 100 people still missing after Moscow attack, Russian news site says - Reuters",
          "description": null,
          "url": "https://www.reuters.com/world/europe/nearly-100-people-still-missing-after-moscow-attack-russian-news-site-says-2024-03-27/",
          "urlToImage": null,
          "publishedAt": "2024-03-28T04:38:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Ryan Glasspiegel",
          "title": "Draymond Green gets ejected less than four minutes into Warriors game for jawing with ref - New York Post ",
          "description": "Draymond Green got the quick hook from the Warriors’ game against the Magic on Wednesday night.",
          "url": "https://nypost.com/2024/03/27/sports/draymond-green-gets-ejected-just-four-minutes-into-warriors-game/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-btb8lbt2x-1711583694336.jpg?quality=75&strip=all&1711569343&w=1024",
          "publishedAt": "2024-03-28T04:26:32Z",
          "content": "Draymond Green got the quick hook from the Golden State Warriors’ road win against the Orlando Magic on Wednesday night.\r\nGreen was ejected less than four minutes into the team’s 101-93 victory at Ki… [+2561 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "KEN SWEET and LARRY NEUMEISTER",
          "title": "Dethroned crypto king Sam Bankman-Fried to be sentenced for defrauding FTX investors - Yahoo! Voices",
          "description": "Former crypto mogul Sam Bankman-Fried faces the potential of decades in prison when he is sentenced Thursday for his role in the 2022 collapse of FTX, once...",
          "url": "https://www.yahoo.com/news/dethroned-crypto-king-sam-bankman-041821874.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zfH6VNfVr409ApaqpaE1EA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MTA-/https://media.zenfs.com/en/ap.org/e79e48e6db710d23853512b7375bc6ef",
          "publishedAt": "2024-03-28T04:18:00Z",
          "content": "NEW YORK (AP) Former crypto mogul Sam Bankman-Fried faces the potential of decades in prison when he is sentenced Thursday for his role in the 2022 collapse of FTX, once one of the world's most popul… [+3302 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Entertainment Tonight"
          },
          "author": "Hope Sloop",
          "title": "Dolly Parton Speaks Out After Beyoncé Reveals She's Covering 'Jolene' - Entertainment Tonight",
          "description": "The singer posted to her Instagram Story on Wednesday after 'Queen Bey' dropped the tracklist for her new album.",
          "url": "https://www.etonline.com/dolly-parton-speaks-out-after-beyonce-reveals-shes-covering-jolene-222519",
          "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2024-03/bey%20and%20dolly.png?h=a55176f7",
          "publishedAt": "2024-03-28T04:04:36Z",
          "content": "Dolly Parton is putting her stamp of approval on Beyoncé's new album, specifically her apparent \"Jolene\" cover. \r\nOn Wednesday, the 42-year-old Queen Bey shared a poster-style tracklist announcing al… [+2691 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Victor Nava",
          "title": "Ex-RNC Chair Ronna McDaniel talking with big shot lawyer, considering legal options after NBC News ouster: report - New York Post ",
          "description": "McDaniel, 51, met with Los Angeles-based entertainment and media attorney Bryan Freedman on Tuesday, according to Politico.",
          "url": "https://nypost.com/2024/03/27/us-news/ronna-mcdaniel-talking-with-big-shot-lawyer-after-nbc-news-firing-report/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/bryan-j-freedman-79115442.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-03-28T03:35:00Z",
          "content": "Former Republican National Committee chair Ronna McDaniel has talked to a prominent lawyer and is weighing her legal options after being fired by NBC News just two days after her network debut. \r\nMcD… [+1788 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Israel and Hezbollah trade strikes over Lebanon border - BBC.com",
          "description": "The Iran-backed movement fires rockets into Israel killing one, after a deadly strike on a Lebanese village.",
          "url": "https://www.bbc.com/news/world-middle-east-68675608",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/67E0/production/_133029562_mediaitem133029558.jpg",
          "publishedAt": "2024-03-28T03:05:02Z",
          "content": null
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": null,
          "title": "Russia strikes Ukraine's Kharkiv with aerial bombs for the first time since 2022 - The Associated Press",
          "description": "Ukrainian officials say Russia has struck the northeastern city of Kharkiv with aerial bombs for the first time since 2022, killing at least one civilian and wounding 16 others. The airstrikes caused widespread damage, hitting several residential buildings an…",
          "url": "https://apnews.com/article/russia-ukraine-war-zelenskyy-danilov-reshuffle-95ce468c67a40aa5ec022e6c6c5b2bd0",
          "urlToImage": "https://dims.apnews.com/dims4/default/6a522e6/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F45%2F0e%2Fca782fc0ffe5a99930dacf264554%2Fdaaf4b194513407e89a7b34ccefcdf87",
          "publishedAt": "2024-03-28T02:58:18Z",
          "content": "KYIV, Ukraine (AP) Russia struck the northeastern city of Kharkiv with aerial bombs Wednesday for the first time since 2022, killing at least one civilian and wounding 16 others, local officials said… [+2398 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Sabrina Malhi",
          "title": "Puerto Rico declares dengue fever an epidemic as cases rise - The Washington Post",
          "description": "More than 500 cases have been reported from the island.",
          "url": "https://www.washingtonpost.com/health/2024/03/27/puerto-rico-dengue-fever-epidemic/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5JSQIQWG6CDJW7HSHBQZC2TEJE_size-normalized.jpg&w=1440",
          "publishedAt": "2024-03-28T02:19:00Z",
          "content": "On Monday, government leaders in Puerto Rico declared a dengue epidemic after a spike in cases of the mosquito-borne disease hit the island.\r\nFrom the start of the year through March 10, there were 5… [+5736 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": null,
          "title": "4 dead, 7 injured in stabbing rampage in Rockford, Illinois, residential area, authorities say - CNN",
          "description": "Four people were found dead and seven others were injured in stabbing rampage across multiple areas in Rockford, Illinois, on Wednesday afternoon, police say, and a suspect is in custody.",
          "url": "https://www.cnn.com/2024/03/27/us/rockford-illinois-stabbing-home-invasion/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-20497779-2008770-still.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-03-28T02:00:00Z",
          "content": "Four people were found dead and seven others were injured in stabbing rampage across multiple areas in Rockford, Illinois, on Wednesday afternoon, police say, and a suspect is in custody.\r\nA 15-year-… [+3143 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Brie Stimson",
          "title": "Former Watergate prosecutor calls Trump gag order ‘so unusual’: ‘This never happens’ - Fox News",
          "description": "Former Watergate prosecutor Nick Akerman said former President Trump's gag order was \"so unusual\" because he has been \"disparaging\" the judge in his hush money case.",
          "url": "https://www.foxnews.com/politics/former-watergate-prosecutor-trump-gag-order-unusual-never-happens",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/trump-speaking.jpg",
          "publishedAt": "2024-03-28T01:20:00Z",
          "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+4311 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "STEFANIE DAZIO, CHRISTOPHER WEBER",
          "title": "Ex-Trump lawyer Eastman should lose state law license for efforts to overturn election, judge says - The Associated Press",
          "description": "A judge has recommended that conservative attorney John Eastman lose his California law license over his efforts to keep former President Donald Trump in power after the 2020 election. Eastman faced 11 disciplinary charges in the state bar court stemming from…",
          "url": "https://apnews.com/article/john-eastman-donald-trump-2020-election-0041abb4a644638d916f3b5ad9006bdf",
          "urlToImage": "https://dims.apnews.com/dims4/default/6193a16/2147483647/strip/true/crop/5451x3066+0+284/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F43%2Fdc%2F464e559fcb8669cb565cc1c977b3%2F1dd5cb1995a34d749267892ccf6dbebc",
          "publishedAt": "2024-03-28T01:04:00Z",
          "content": "LOS ANGELES (AP) A judge has recommended that conservative attorney John Eastman lose his California law license over his efforts to keep former President Donald Trump in power after the 2020 electio… [+5815 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WTOP"
          },
          "author": "Thomas Robertson, Tadiwos Abedje",
          "title": "DC reaches deal to keep Capitals, Wizards at Capital One Arena until 2050 after Va. agreement falls apart - WTOP",
          "description": "The Washington Capitals and Washington Wizards would stay in D.C. until 2050, under a $515 million deal announced Wednesday by the mayor and teams’ owner.",
          "url": "https://wtop.com/dc/2024/03/alexandria-says-capitals-wizards-arena-deal-is-dead/",
          "urlToImage": "https://wtop.com/wp-content/uploads/2024/03/DC_Sports_Stadium_02989-scaled.jpg",
          "publishedAt": "2024-03-27T23:48:45Z",
          "content": "Ted Leonsis, right, owner of the Washington Wizards NBA basketball team and Washington Capitals NHL hockey team, speaks during a news conference with Washington DC Mayor Muriel Bowser, left, and DC C… [+5425 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "Aarthi Swaminathan",
          "title": "Ending 6% commissions could create a ‘Venus flytrap’ for home buyers: economist - MarketWatch",
          "description": "‘I hope the presiding judge throws the settlement out,’ economist says",
          "url": "https://www.marketwatch.com/story/ending-6-commissions-could-create-a-venus-flytrap-situation-for-home-buyers-economist-says-7183a706",
          "urlToImage": "https://images.mktw.net/im-53201021/social",
          "publishedAt": "2024-03-27T23:22:00Z",
          "content": "Following a landmark settlement reached by the countrys largest real-estate-industry group, the housing market is on the precipice of a major change thats poised to disrupt how people buy and sell ho… [+146 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MacRumors"
          },
          "author": "Juli Clover",
          "title": "Google Maps Gains New AI Tools, Updated Recommendation Lists and More - MacRumors",
          "description": "Google today announced several changes that it is making to the Google Maps platform, including an AI update. Google Maps now provides better...",
          "url": "https://www.macrumors.com/2024/03/27/google-maps-ai-tools-list-updates/",
          "urlToImage": "https://images.macrumors.com/t/uxvAb0lSH0Ey8ett4qRR4f2kcZA=/2250x/article-new/2021/04/Google-maps-feaure-purple.jpg",
          "publishedAt": "2024-03-27T23:18:56Z",
          "content": "Google today announced several changes that it is making to the Google Maps platform, including an AI update. Google Maps now provides better at-a-glance information on locations, with the details po… [+1303 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBCSports.com"
          },
          "author": "Charean Williams",
          "title": "Jayden Daniels drew a large crowd of NFL talent evaluators to LSU's Pro Day - NBC Sports",
          "description": "Jayden Daniels didn't work out at the Scouting Combine in February.",
          "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/jayden-daniels-drew-a-large-crowd-of-nfl-talent-evaluators-at-lsus-pro-day",
          "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/32a21bd/2147483647/strip/true/crop/4000x2250+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F86%2F08%2F60b53f11447fadcf81642746d54a%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D21969928",
          "publishedAt": "2024-03-27T23:07:21Z",
          "content": "Jayden Daniels didnt work out at the Scouting Combine in February. The reason, he said, was because he hoped more NFL teams would come to LSUs Pro Day, allowing his teammates to be seen by more talen… [+1222 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Patrick Reilly",
          "title": "Meet the NJ liquor store clerk who sold $1.13B Mega Millions ticket - New York Post ",
          "description": "TiYahna Bambaata held the life-changing winning ticket in her hand at the Neptune Township ShopRite Liquor store before handing it over to the lucky customer.",
          "url": "https://nypost.com/2024/03/27/us-news/meet-the-nj-liquor-store-clerk-who-sold-1-13b-mega-millions-ticket/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/briefly-tiyahna-bambaata-held-hands-79100583.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-03-27T22:57:00Z",
          "content": "TiYahna Bambaata has no clue who bought the $1.13 billion Mega Millions ticket from her at a New Jersey liquor store.\r\nBut for a brief moment, the clerk held the life-changing winning ticket in her h… [+2394 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NASASpaceflight.com"
          },
          "author": "William Graham",
          "title": "Delta IV to make final flight with NROL-70 mission - NASASpaceFlight.com - NASASpaceflight.com",
          "description": "United Launch Alliance will launch the final Delta IV rocket on Thursday with the NROL-70…",
          "url": "https://www.nasaspaceflight.com/2024/03/delta-iv-final-flight/",
          "urlToImage": "https://www.nasaspaceflight.com/wp-content/uploads/2024/03/NSF-2024-03-27-22-47-32-347-wmarked.jpg",
          "publishedAt": "2024-03-27T22:50:14Z",
          "content": "11United Launch Alliance will launch the final Delta IV rocket on Thursday with the NROL-70 mission for the National Reconnaissance Office. Liftoff, from the Cape Canaveral Space Force Station, is sc… [+19275 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "College basketball transfer portal 2024: Ranking top 40 players as Tony Perkins, Sean Pedulla explore options - CBS Sports",
          "description": "Here are the best transfers in the portal so far during college basketball's 2024 offseason",
          "url": "https://www.cbssports.com/college-basketball/news/college-basketball-transfer-portal-2024-ranking-top-40-players-as-tony-perkins-sean-pedulla-explore-options/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/03/27/84d98f26-44c6-41cb-afc8-8f3353fd6da0/thumbnail/1200x675/72e8bc11d9a09ebc7414a1f93f2fc52f/tony-perkins-usatsi.jpg",
          "publishedAt": "2024-03-28T12:09:01Z",
          "content": "College basketball's transfer market continues to fill with quality talent, including an influx of high-impact guards. Since the NCAA Tournament's first weekend concluded, players like Tony Perkins, … [+16971 chars]"
        },
        {
          "source": {
            "id": "nfl-news",
            "name": "NFL News"
          },
          "author": null,
          "title": "Free-agent RB J.K. Dobbins to visit Chargers Thursday after being cleared for football activities - NFL.com",
          "description": "Free-agent running back J.K Dobbins could be in for a reunion with offensive coordinator Greg Roman. Dobbins is scheduled to visit the Los Angeles Chargers on Thursday, NFL Network Insider Tom Pelissero reported, per a source informed of the plan.",
          "url": "https://www.nfl.com/news/free-agent-rb-j-k-dobbins-to-visit-chargers-thursday-after-being-cleared-for-football-activities",
          "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/grz4pftlgw8qqp1qu2ag",
          "publishedAt": "2024-03-28T11:32:00Z",
          "content": "Dobbins spent his first three years in Baltimore under Greg Roman, who signed on as Jim Harbaugh's OC in L.A. this season.\r\nAs a rookie, the Ohio State product blasted out of the gate, proving a perf… [+704 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Ryan Gaydos",
          "title": "Ex-NBA star dismisses Caitlin Clark's chances of scoring in BIG3 - Fox News",
          "description": "Former NBA star Kenyon Martin dismissed any chance of Caitlin Clark being able to score if she decides to take up the BIG3 basketball league's offer.",
          "url": "https://www.foxnews.com/sports/ex-nba-star-dismisses-caitlin-clarks-chances-scoring-big3",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/Caitlin-Clark-Kenyon-Martin.jpg",
          "publishedAt": "2024-03-28T11:08:00Z",
          "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+2814 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBCSports.com"
          },
          "author": "Michael David Smith",
          "title": "With 13 touchbacks and 0 returns, Super Bowl LVIII marked the end of an era for kickoffs - NBC Sports",
          "description": "Super Bowl LVIII marked the last NFL game played before kickoff rules were radically changed, and it was emblematic of why the league decided a major change was needed.",
          "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/with-13-touchbacks-and-0-returns-super-bowl-lviii-marked-the-end-of-an-era-for-kickoffs",
          "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/a996024/2147483647/strip/true/crop/4980x2801+0+321/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb5%2F67%2Ffc9dbf02465481acbc8986839910%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D22522720",
          "publishedAt": "2024-03-28T11:05:03Z",
          "content": "Super Bowl LVIII marked the last NFL game played before kickoff rules were radically changed, and it was emblematic of why the league decided a major change was needed.\r\nIn the Super Bowl to end the … [+1320 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Todd Archer",
          "title": "What happens if the Cowboys don't extend Dak Prescott's contract in 2024? - ESPN",
          "description": "Prescott is entering the final year of his Cowboys contract and can become an unrestricted free agent in 2025.",
          "url": "https://www.espn.com/nfl/story/_/id/39821175/what-happens-cowboys-dak-prescott-contract-extension",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0327%2Fr1310784_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-28T11:00:00Z",
          "content": "FRISCO, Texas -- As we wait and wonder when or if the Dallas Cowboys and Dak Prescott will come to an agreement on an extension in 2024, let's play out what some would call the worst-case scenario: T… [+5341 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cyclingnews.com"
          },
          "author": "Simone Giuliani",
          "title": "Dwars door Vlaanderen crash update – Surgery for Van Aert, Stuyven and Kirsch - Cyclingnews",
          "description": "Crash impacts riders and teams ahead of Sunday's Tour of Flanders",
          "url": "https://www.cyclingnews.com/news/dwars-door-vlaanderen-crash-update-surgery-for-van-aert-stuyven-and-kirsch/",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/TKDcnbcAcAf4CrtWFmvJFR-1200-80.jpg",
          "publishedAt": "2024-03-28T10:31:57Z",
          "content": "The mournful cries of Wout Van Aert after the Dwars door Vlaanderen crash were accompanied by the brutal vision of a number of riders and bikes scattered across the road, with ripped jerseys and the … [+6260 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Eddie Timanus",
          "title": "What March Madness games are today? NCAA Tournament Sweet 16 schedule - USA TODAY",
          "description": "The first day of the Sweet 16 brings four matchups from the East and West Regions on Thursday. A breakdown of the key points and who might advance.",
          "url": "https://www.usatoday.com/story/sports/ncaab/2024/03/28/march-madness-games-today-ncaa-tournament-sweet-16-matchups-thursday/73123595007/",
          "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/04/04/USAT/ed6cd0d0-aa87-402b-8ef9-a553a0f0248a-USATSI_20386785.jpg?crop=3578,2013,x131,y33&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2024-03-28T10:13:43Z",
          "content": "March Madness has produced mostly sanity thus far through the first two rounds of the NCAA mens basketball tournament. Sure, there were a few surprises, but for the most part the remaining teams on t… [+3902 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Athletic"
          },
          "author": "The Athletic MLB Staff",
          "title": "2024 MLB season preview: Opening Day grades, odds and analysis for all 30 teams - The Athletic",
          "description": "On Opening Day, a look at how every team in Major League Baseball measures up.",
          "url": "https://theathletic.com/5354007/2024/03/28/mlb-season-preview-2024/",
          "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/03/27161850/0328_MLB_BigBoardCombined.png",
          "publishedAt": "2024-03-28T09:16:03Z",
          "content": "As part of the leadup to Opening Day, The Athletic published its division-by-division previews, culminating with this overview of the entire league. We listed all 30 teams in order of expected wins, … [+25283 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NBCSports.com"
          },
          "author": "Michael David Smith",
          "title": "Chiefs, Ravens, 49ers favored to have NFL's best records with win totals set at 11.5 - NBC Sports",
          "description": "The defending champion Chiefs have the best odds to have the NFL's best record.",
          "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/chiefs-ravens-49ers-favored-to-have-nfls-best-records-with-win-totals-set-at-11-5",
          "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/bda490f/2147483647/strip/true/crop/5021x2824+0+261/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fba%2Fb0%2F702663074e88a1a0c89d9bd8ea4a%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2000821940",
          "publishedAt": "2024-03-28T08:34:29Z",
          "content": "The Chiefs, Ravens and 49ers will have the NFLs best records in 2024, if the betting odds are to be believed.\r\nKansas City, Baltimore and San Francisco each had win totals of over/under 11.5 in the o… [+884 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Luis Rubiales: Prosecutors seek 2.5-year jail term over World Cup kiss - BBC.com",
          "description": "Spain's ex-football boss could go to prison because of a non-consensual kiss at the Women's World Cup.",
          "url": "https://www.bbc.com/news/world-europe-68679506",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/89AB/production/_133034253_rubiales.jpg",
          "publishedAt": "2024-03-28T07:49:25Z",
          "content": null
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Dave McMenamin",
          "title": "LeBron James being 'strategic' with health vs. Lakers' seeding - ESPN",
          "description": "LeBron James says he will prioritize his health over the chase for the Lakers' playoff seeding down the stretch of the regular season.",
          "url": "https://www.espn.com/nba/story/_/id/39824946/lebron-james-being-strategic-health-vs-lakers-seeding",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0328%2Fr1310983_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-28T07:07:00Z",
          "content": "MEMPHIS -- LeBron James says he will prioritize his health over the chase for the Los Angeles Lakers' playoff seeding down the stretch of the regular season.\r\n\"I got to be smart with it,\" James said … [+3088 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": null,
          "title": "Khamzat Chimaev vs. Robert Whittaker tops UFC Saudi Arabia card June 22 - ESPN",
          "description": "Khamzat Chimaev and Robert Whittaker will headline the UFC's first card in Saudi Arabia on June 22.",
          "url": "https://www.espn.com/mma/story/_/id/39824776/khamzat-chimaev-vs-robert-whittaker-tops-ufc-saudi-arabia-card-june-22",
          "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1029%2Fr1245542_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-28T06:18:00Z",
          "content": "Mar 28, 2024, 01:18 AM ET\r\nThe UFC will put on its first event in Saudi Arabia on June 22 with a card headlined by a middleweight bout between Khamzat Chimaev and Robert Whittaker, Dana White, the pr… [+1018 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "Tim Bontemps",
          "title": "Refs admit missed foul on 76ers' final drive in loss to Clips - ESPN",
          "description": "A chaotic end to Wednesday night's game saw the Clippers celebrating a needed win and Philadelphia's Nick Nurse and Kelly Oubre Jr. confronting the officials over a missed foul that crew chief Kevin Scott said should have been called.",
          "url": "https://www.espn.com/nba/story/_/id/39824611/crew-chief-admits-missed-foul-76ers-final-drive-loss-clippers",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0328%2Fr1310977_1296x729_16%2D9.jpg",
          "publishedAt": "2024-03-28T05:38:00Z",
          "content": "PHILADELPHIA -- Following the LA Clippers' 108-107 win over the Philadelphia 76ers on Wednesday night, crew chief Kevin Scott said in a pool report that there should have been a foul called on a driv… [+4540 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Silver Screen and Roll "
          },
          "author": "Edwin Garcia",
          "title": "Grades for LeBron James, Rui Hachimura in Lakers win vs. Grizzlies - Silver Screen and Roll ",
          "description": "Grading every Lakers player’s performance from the team’s 136-124 win over the Grizzlies.",
          "url": "https://www.silverscreenandroll.com/2024/3/27/24114257/player-grades-lakers-vs-grizzlies-box-score-stats-anthony-davis-austin-reaves-dangelo-russell",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/aCiF3JYYfxX2-OsDNx74k4zbV58=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25359111/2118493839.jpg",
          "publishedAt": "2024-03-28T05:14:46Z",
          "content": "The Lakers had a couple of defensive lapses allowing the Grizzlies to have some hope for a comeback, but in general, the Lakers cruised to victory and dominated most of the game. \r\nThe win was impres… [+5253 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Arizona Sports"
          },
          "author": ", Kellan Olson",
          "title": "Suns respond to season's low point with thorough win over Nuggets - Arizona Sports",
          "description": "The guessing game of which Suns team shows up on which night persists. The best current version did on Wednesday in a win over the Nuggets.",
          "url": "https://arizonasports.com/story/3545129/suns-respond-to-seasons-low-point-with-thorough-win-over-nuggets/",
          "urlToImage": "http://arizonasports.com/wp-content/uploads/2024/03/GettyImages-2118669573-e1711598718630.jpg",
          "publishedAt": "2024-03-28T05:10:00Z",
          "content": "The guessing game of which Phoenix Suns team shows up on which night persists. The best current version did on Wednesday in a 104-97 win over the Denver Nuggets.\r\nPhoenix was clearly motivated by an … [+5654 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MLB.com"
          },
          "author": "MLB.com",
          "title": "Victor Scott II mentored by Cardinals legend Vince Coleman - MLB.com",
          "description": null,
          "url": "https://www.mlb.com/news/victor-scott-ii-mentored-by-cardinals-legend-vince-coleman",
          "urlToImage": null,
          "publishedAt": "2024-03-28T04:54:15Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "MLB Trade Rumors"
          },
          "author": "Nick Deeds",
          "title": "AL East Notes: Yankees, Montgomery, Red Sox, Clevinger, Shenton - MLB Trade Rumors",
          "description": "Prior to the southpaw signing with the Diamondbacks last night on a one-year deal that guarantees him $25MM, the Yankees &hellip;",
          "url": "https://www.mlbtraderumors.com/2024/03/al-east-notes-yankees-montgomery-red-sox-clevinger-shenton.html",
          "urlToImage": "https://cdn.mlbtraderumors.com/files/2024/02/USATSI_21761970-1024x683.jpg",
          "publishedAt": "2024-03-28T04:49:43Z",
          "content": "Prior to the southpaw signing with the Diamondbacks last night on a one-year deal that guarantees him $25MM, the Yankees were among the teams most frequently connected to Jordan Montgomery this winte… [+3948 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Ryan Glasspiegel",
          "title": "Draymond Green gets ejected less than four minutes into Warriors game for jawing with ref - New York Post ",
          "description": "Draymond Green got the quick hook from the Warriors’ game against the Magic on Wednesday night.",
          "url": "https://nypost.com/2024/03/27/sports/draymond-green-gets-ejected-just-four-minutes-into-warriors-game/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-btb8lbt2x-1711583694336.jpg?quality=75&strip=all&1711569343&w=1024",
          "publishedAt": "2024-03-28T04:26:32Z",
          "content": "Draymond Green got the quick hook from the Golden State Warriors’ road win against the Orlando Magic on Wednesday night.\r\nGreen was ejected less than four minutes into the team’s 101-93 victory at Ki… [+2561 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Vishal Dikshit",
          "title": "Swashbuckling. Radiant. High-octane. We have a brand-new SRH - ESPNcricinfo",
          "description": "Between them, Travis Head, Abhishek Sharma and Heinrich Klaasen broke records, Mumbai Indians' hearts, and T20 batting rules",
          "url": "https://www.espncricinfo.com/story/ipl-2024-srh-vs-mi-travis-head-abhishek-sharma-heinrich-klaasen-give-us-a-brand-new-sunrisers-hyderabad-1426748",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/378400/378402.6.jpg",
          "publishedAt": "2024-03-28T03:46:47Z",
          "content": "AnalysisBetween them, Travis Head, Abhishek Sharma and Heinrich Klaasen broke records, Mumbai Indians' hearts, and T20 batting rules"
        },
        {
          "source": {
            "id": null,
            "name": "SwimSwam"
          },
          "author": "Spencer Penland",
          "title": "Chris Guiliano's ND Record 1:30.36 and More Swims You Might've Missed on Day 1 of Men's NCAAs - SwimSwam",
          "description": "This post will be dedicated to shining some light on some of the swims that may have flown under the radar, or just didn't get mentioned in our main recaps.",
          "url": "https://swimswam.com/chris-guilianos-nd-record-130-36-and-more-swims-you-mightve-missed-on-day-1-of-mens-ncaas/",
          "urlToImage": "https://swimswam.com/wp-content/uploads/2024/03/Chris-Guiliano-By-Jack-Spitser-DSC09955-scaled.jpg?1711616407",
          "publishedAt": "2024-03-28T03:33:45Z",
          "content": null
        }
      ]
    }
    //let parsedData = await data.json();


    // Check if the API request was successful and if the data contains the expected structure
    if (Data.status === 'ok' && Data.articles) {
      this.setState({ article: Data.articles ,
      loading:false});
      this.props.setprogress(100);
    }

     else {
      console.error('Error fetching news data:', Data.message);
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
 /* clicktonext = async () => {
    console.log("next");
    try {
      let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page + 1}`;
      this.setState({loading:true}) 
      let data = await fetch(url);
      
      let parsedData = await data.json();
  console.log("parseddata completed")
      this.setState ({
        page: this.state.page + 1,
        article: parsedData.articles
      });
      this.setState({loading:false})
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  
  clicktoprev= async()=>{
 console.log("prev")
 try {
  let url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page - 1}`;
  this.setState({loading:true}) 
  let data = await fetch(url);

  let parsedData = await data.json();
  
  
  // Concatenate the new articles with the existing ones
  this.setState ({
    page: this.state.page - 1,
    article:  parsedData.articles,
  });
  this.setState({loading:false})
} catch (error) {
  console.error("Error fetching news data:", error);
}
  }*/
  async fetchData() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=0c4a31b46d5c4ae79f7831b51de1b4a7&pagesize=6&page=${this.state.page}`;
    
    try {
      this.setState({ loading: true });
      const data = await fetch(url);
      const parsedData = await data.json();

      if (parsedData.status === 'ok' && parsedData.articles) {
        this.setState({
          article: this.state.article.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          loading: false,
        });
      } else {
        console.error('Error fetching news data:', parsedData.message);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error('Error fetching news data:', error);
      this.setState({ loading: false });
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    await this.fetchData();
  };
  render() {
  /*  let{mode} =this.props;*/
    return (
 <>
        <h1 className="d-flex justify-content-center" style={{ background: 'linear-gradient(90deg, #020201, #1eb92a, #1bc5ae)', color: 'transparent', backgroundClip: 'text' }}>Today's news-{this.props.category} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className="cont">
          <div className="row  mx-8px"> 
            {!this.state.loading && this.state.article.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsrow title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} source={element.name} />
              </div>;
            })}
         </div>
         </div>
      
      </InfiniteScroll>

      </>
       
     
    )
  }

}


export default Newscontainer
 