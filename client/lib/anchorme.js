var anchorme={};anchorme.occurrences=function(e,a,n){if(e+="",a+="",a.length<=0)return e.length+1;for(var r=0,i=0,o=n?1:a.length;;){if(i=e.indexOf(a,i),!(i>=0))break;r++,i+=o}return r},anchorme.dontbreakHTML=function(e,a,n){for(var r="<"+a+" ",i=e.split(">"),o=i.length;o--;){var t=i[o].split(r).pop().split(">").shift(),s=t.indexOf(n);if("'"===t.charAt(s+5)||'"'===t.charAt(s+5))var c=s+5,l=t.charAt(c);else if("'"===t.charAt(s+6)||'"'===t.charAt(s+6))var c=s+6,l=t.charAt(c);else if("'"===t.charAt(s+7)||'"'===t.charAt(s+7))var c=s+7,l=t.charAt(c);var d=c+1,m=t.slice(d),h=m.indexOf(l)+d,g=t.slice(s,h+1),b=g.split(" ").join("");i[o]=i[o].replace(g,b)}return i.join(">")},anchorme.order=function(e,a,n){for(var r=e.split(a),i=0;i<r.length;i++){for(var o,t=!1,s=!1,c=!0,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=",d="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+-/=?^_`{|}~.",m="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.:",h=r[i].toLowerCase(),g=0;g<h.length;g++){var b=h[g];-1===l.indexOf(b)&&(g=h.length,c=!1)}if(c){var f=h.indexOf("http:/"),x=h.indexOf("https:/"),u=h.indexOf("ftp:/"),p=h.indexOf("file:/"),k=[".com",".net",".org",".edu",".gov",".uk",".ca",".de",".jp",".info",".cn",".fr",".in",".pl",".au",".us",".ru",".ch",".it",".nl",".se",".no",".es",".mil",".guru",".berlin",".photography",".tips",".today",".email",".technology",".company",".clothing",".ir",".biz",".cz",".kr",".eu",".ua",".za",".co",".gr",".ro",".tw",".mx",".vn",".at",".dk",".tv",".me",".hu",".ar",".sk",".fi",".cl",".id",".nz",".cc",".pt",".by",".il",".ie",".my",".mobi",".ws",".pro",".asia",".abb",".abbott",".abogado",".ac",".academy",".accenture",".accountant",".accountants",".active",".actor",".ad",".ads",".adult",".ae",".aeg",".aero",".af",".afl",".ag",".agency",".ai",".aig",".airforce",".airtel",".al",".allfinanz",".alsace",".am",".amsterdam",".an",".android",".ao",".apartments",".app",".aq",".aquarelle",".archi",".army",".arpa",".as",".associates",".attorney",".auction",".audio",".auto",".autos",".aw",".ax",".axa",".az",".azure",".ba",".band",".bank",".bar",".barcelona",".barclaycard",".barclays",".bargains",".bauhaus",".bayern",".bb",".bbc",".bbva",".bcn",".bd",".be",".beer",".bentley",".best",".bf",".bg",".bh",".bharti",".bi",".bible",".bid",".bike",".bing",".bingo",".bio",".bj",".black",".blackfriday",".bloomberg",".blue",".bm",".bmw",".bn",".bnl",".bnpparibas",".bo",".boats",".bond",".boo",".boutique",".br",".bradesco",".bridgestone",".broker",".brother",".brussels",".bs",".bt",".budapest",".build",".builders",".business",".buzz",".bv",".bw",".bz",".bzh",".cab",".cafe",".cal",".camera",".camp",".cancerresearch",".canon",".capetown",".capital",".caravan",".cards",".care",".career",".careers",".cars",".cartier",".casa",".cash",".casino",".cat",".catering",".cba",".cbn",".cd",".center",".ceo",".cern",".cf",".cfa",".cfd",".cg",".channel",".chat",".cheap",".chloe",".christmas",".chrome",".church",".ci",".cisco",".citic",".city",".ck",".claims",".cleaning",".click",".clinic",".cloud",".club",".cm",".coach",".codes",".coffee",".college",".cologne",".commbank",".community",".computer",".condos",".construction",".consulting",".contractors",".cooking",".cool",".coop",".corsica",".country",".coupons",".courses",".cr",".credit",".creditcard",".cricket",".crown",".crs",".cruises",".cu",".cuisinella",".cv",".cw",".cx",".cy",".cymru",".cyou",".dabur",".dad",".dance",".date",".dating",".datsun",".day",".dclk",".deals",".degree",".delivery",".delta",".democrat",".dental",".dentist",".desi",".design",".dev",".diamonds",".diet",".digital",".direct",".directory",".discount",".dj",".dm",".dnp",".do",".docs",".dog",".doha",".domains",".doosan",".download",".drive",".durban",".dvag",".dz",".earth",".eat",".ec",".education",".ee",".eg",".emerck",".energy",".engineer",".engineering",".enterprises",".epson",".equipment",".er",".erni",".esq",".estate",".et",".eurovision",".eus",".events",".everbank",".exchange",".expert",".exposed",".express",".fail",".faith",".fan",".fans",".farm",".fashion",".feedback",".film",".finance",".financial",".firmdale",".fish",".fishing",".fit",".fitness",".fj",".fk",".flights",".florist",".flowers",".flsmidth",".fly",".fm",".fo",".foo",".football",".forex",".forsale",".forum",".foundation",".frl",".frogans",".fund",".furniture",".futbol",".fyi",".ga",".gal",".gallery",".game",".garden",".gb",".gbiz",".gd",".gdn",".ge",".gent",".genting",".gf",".gg",".ggee",".gh",".gi",".gift",".gifts",".gives",".gl",".glass",".gle",".global",".globo",".gm",".gmail",".gmo",".gmx",".gn",".gold",".goldpoint",".golf",".goo",".goog",".google",".gop",".gp",".gq",".graphics",".gratis",".green",".gripe",".gs",".gt",".gu",".guge",".guide",".guitars",".gw",".gy",".hamburg",".hangout",".haus",".healthcare",".help",".here",".hermes",".hiphop",".hitachi",".hiv",".hk",".hm",".hn",".hockey",".holdings",".holiday",".homedepot",".homes",".honda",".horse",".host",".hosting",".hoteles",".hotmail",".house",".how",".hr",".hsbc",".ht",".ibm",".icbc",".icu",".ifm",".iinet",".im",".immo",".immobilien",".industries",".infiniti",".ing",".ink",".institute",".insure",".int",".international",".investments",".io",".iq",".irish",".is",".ist",".istanbul",".iwc",".java",".jcb",".je",".jetzt",".jewelry",".jlc",".jll",".jm",".jo",".jobs",".joburg",".jprs",".juegos",".kaufen",".kddi",".ke",".kg",".kh",".ki",".kim",".kitchen",".kiwi",".km",".kn",".koeln",".komatsu",".kp",".krd",".kred",".kw",".ky",".kyoto",".kz",".la",".lacaixa",".land",".lasalle",".lat",".latrobe",".law",".lawyer",".lb",".lc",".lds",".lease",".leclerc",".legal",".lgbt",".li",".liaison",".lidl",".life",".lighting",".limited",".limo",".link",".live",".lk",".loan",".loans",".lol",".london",".lotte",".lotto",".love",".lr",".ls",".lt",".ltda",".lu",".lupin",".luxe",".luxury",".lv",".ly",".ma",".madrid",".maif",".maison",".management",".mango",".market",".marketing",".markets",".marriott",".mba",".mc",".md",".media",".meet",".melbourne",".meme",".memorial",".men",".menu",".mg",".mh",".miami",".microsoft",".mini",".mk",".ml",".mm",".mma",".mn",".mo",".moda",".moe",".monash",".money",".montblanc",".mormon",".mortgage",".moscow",".motorcycles",".mov",".movie",".movistar",".mp",".mq",".mr",".ms",".mt",".mtn",".mtpc",".mu",".museum",".mv",".mw",".mz",".na",".nadex",".nagoya",".name",".navy",".nc",".ne",".nec",".netbank",".network",".neustar",".new",".news",".nexus",".nf",".ng",".ngo",".nhk",".ni",".nico",".ninja",".nissan",".np",".nr",".nra",".nrw",".ntt",".nu",".nyc",".office",".okinawa",".om",".omega",".one",".ong",".onl",".online",".ooo",".oracle",".orange",".organic",".osaka",".otsuka",".ovh",".pa",".page",".panerai",".paris",".partners",".parts",".party",".pe",".pf",".pg",".ph",".pharmacy",".philips",".photo",".photos",".physio",".piaget",".pics",".pictet",".pictures",".pink",".pizza",".pk",".place",".play",".plumbing",".plus",".pm",".pn",".pohl",".poker",".porn",".post",".pr",".praxi",".press",".prod",".productions",".prof",".properties",".property",".ps",".pub",".pw",".py",".qa",".qpon",".quebec",".racing",".re",".realtor",".realty",".recipes",".red",".redstone",".rehab",".reise",".reisen",".reit",".ren",".rent",".rentals",".repair",".report",".republican",".rest",".restaurant",".review",".reviews",".rich",".ricoh",".rio",".rip",".rocks",".rodeo",".rs",".rsvp",".ruhr",".run",".rw",".ryukyu",".sa",".saarland",".sakura",".sale",".samsung",".sandvik",".sandvikcoromant",".sap",".sarl",".saxo",".sb",".sc",".sca",".scb",".schmidt",".scholarships",".school",".schule",".schwarz",".science",".scor",".scot",".sd",".seat",".sener",".services",".sew",".sex",".sexy",".sg",".sh",".shiksha",".shoes",".show",".shriram",".si",".singles",".site",".sj",".ski",".sky",".skype",".sl",".sm",".sn",".sncf",".so",".soccer",".social",".software",".sohu",".solar",".solutions",".sony",".soy",".space",".spiegel",".spreadbetting",".sr",".st",".starhub",".statoil",".studio",".study",".style",".su",".sucks",".supplies",".supply",".support",".surf",".surgery",".suzuki",".sv",".swatch",".swiss",".sx",".sy",".sydney",".systems",".sz",".taipei",".tatar",".tattoo",".tax",".taxi",".tc",".td",".team",".tech",".tel",".telefonica",".temasek",".tennis",".tf",".tg",".th",".thd",".theater",".tickets",".tienda",".tires",".tirol",".tj",".tk",".tl",".tm",".tn",".to",".tokyo",".tools",".top",".toray",".toshiba",".tours",".town",".toys",".tr",".trade",".trading",".training",".travel",".trust",".tt",".tui",".tz",".ubs",".ug",".university",".uno",".uol",".uy",".uz",".va",".vacations",".vc",".ve",".vegas",".ventures",".versicherung",".vet",".vg",".vi",".viajes",".video",".villas",".vision",".vista",".vistaprint",".vlaanderen",".vodka",".vote",".voting",".voto",".voyage",".vu",".wales",".walter",".wang",".watch",".webcam",".website",".wed",".wedding",".weir",".wf",".whoswho",".wien",".wiki",".williamhill",".win",".windows",".wme",".work",".works",".world",".wtc",".wtf",".xbox",".xerox",".xin",".xn--1qqw23a",".xn--30rr7y",".xn--3bst00m",".xn--3ds443g",".xn--3e0b707e",".xn--45brj9c",".xn--45q11c",".xn--4gbrim",".xn--55qw42g",".xn--55qx5d",".xn--6frz82g",".xn--6qq986b3xl",".xn--80adxhks",".xn--80ao21a",".xn--80asehdb",".xn--80aswg",".xn--90a3ac",".xn--90ais",".xn--9et52u",".xn--b4w605ferd",".xn--c1avg",".xn--cg4bki",".xn--clchc0ea0b2g2a9gcd",".xn--czr694b",".xn--czrs0t",".xn--czru2d",".xn--d1acj3b",".xn--d1alf",".xn--estv75g",".xn--fiq228c5hs",".xn--fiq64b",".xn--fiqs8s",".xn--fiqz9s",".xn--fjq720a",".xn--flw351e",".xn--fpcrj9c3d",".xn--fzc2c9e2c",".xn--gecrj9c",".xn--h2brj9c",".xn--hxt814e",".xn--i1b6b1a6a2e",".xn--imr513n",".xn--io0a7i",".xn--j1amh",".xn--j6w193g",".xn--kcrx77d1x4a",".xn--kprw13d",".xn--kpry57d",".xn--kput3i",".xn--l1acc",".xn--lgbbat1ad8j",".xn--mgb9awbf",".xn--mgba3a4f16a",".xn--mgbaam7a8h",".xn--mgbab2bd",".xn--mgbayh7gpa",".xn--mgbbh1a71e",".xn--mgbc0a9azcg",".xn--mgberp4a5d4ar",".xn--mgbpl2fh",".xn--mgbx4cd0ab",".xn--mxtq1m",".xn--ngbc5azd",".xn--node",".xn--nqv7f",".xn--nqv7fs00ema",".xn--nyqy26a",".xn--o3cw4h",".xn--ogbpf8fl",".xn--p1acf",".xn--p1ai",".xn--pgbs0dh",".xn--q9jyb4c",".xn--qcka1pmc",".xn--rhqv96g",".xn--s9brj9c",".xn--ses554g",".xn--unup4y",".xn--vermgensberater-ctb",".xn--vermgensberatung-pwb",".xn--vhquv",".xn--vuq861b",".xn--wgbh1c",".xn--wgbl6a",".xn--xhq521b",".xn--xkc2al3hye2a",".xn--xkc2dl3a5ee0h",".xn--y9a3aq",".xn--yfro4i67o",".xn--ygbi2ammx",".xn--zfr164b",".xxx",".xyz",".yachts",".yandex",".ye",".yodobashi",".yoga",".yokohama",".youtube",".yt",".zip",".zm",".zone",".zuerich",".zw"];if(0===f||0===x||0===u||0===p)t=!0;else if(h.indexOf(".")>0){if(anchorme.occurrences(h,".")>=3){var v=h.split("."),y=v[0],w=v[1],O=v[2];if(v[3].indexOf("/")>-1)var j=v[3].indexOf("/"),q=v[3].substring(0,j),z=v[3].substring(j);else var q=v[3],z=!1;(z===!1||"/"===z.charAt(0))&&!isNaN(y)&&!isNaN(w)&&!isNaN(O)&&!isNaN(q)&&255>y-1&&255>y-1&&255>y-1&&255>y-1?(t=!0,s="http://"):o="email"}else o="email";if("email"===o)if(1==anchorme.occurrences(h,"@")){for(var L=h.indexOf("@"),H=h.substring(0,L),M=h.substring(L+1,h.length),T=!0,g=0;g<H.length;g++){var b=H[g];-1===d.indexOf(b)&&(g=H.length,T=!1)}for(var g=0;g<M.length;g++){var b=M[g];-1===m.indexOf(b)&&(g=M.length,T=!1)}if(T)for(var g=0;g<k.length;g++){var A=k[g];-1!==h.indexOf(A,h.length-A.length)?(t=!0,s="mailto:",g=k.length,o=""):o="domains"}else o="domains"}else o="domains";if("domains"===o){var N=!0;if(h.indexOf("/")>4)for(var j=h.indexOf("/"),C=h.substring(0,j),g=0;g<C.length;g++){var b=C[g];-1===m.indexOf(b)&&(g=C.length,N=!1)}else for(var g=0;g<h.length;g++){var b=h[g];-1===m.indexOf(b)&&(g=h.length,N=!1)}if(N)if(0===h.indexOf("www."))t=!0,s="http://";else for(var g=0;g<k.length;g++){var A=k[g],B=A+"/",D=A+":";-1!==h.indexOf(A,h.length-A.length)?(t=!0,s="http://",g=k.length):h.indexOf(B)>-1?(t=!0,s="http://",g=k.length):h.indexOf(D)>-1&&(t=!0,s="http://",g=k.length)}}}var E=s?s+h:h;if(t)if("object"==typeof n){r[i]="<a href='"+E+"'";for(var F in n)r[i]=r[i]+" "+F+"='"+n[F]+"'";r[i]=r[i]+">"+h+"</a>"}else r[i]="<a href='"+E+"'>"+h+"</a>"}}return r.join(a)},anchorme.js=function(e,a){e.indexOf("</a>")>-1&&(e=anchorme.dontbreakHTML(e,"a","href")),e.indexOf("</img>")>-1&&(e=anchorme.dontbreakHTML(e,"img","src")),e.indexOf("</blockquote >")>-1&&(e=anchorme.dontbreakHTML(e,"blockquote","cite")),e.indexOf("</del>")>-1&&(e=anchorme.dontbreakHTML(e,"del","cite")),e.indexOf("</iframe>")>-1&&(e=anchorme.dontbreakHTML(e,"iframe","src")),e.indexOf("</q>")>-1&&(e=anchorme.dontbreakHTML(e,"q","cite")),e.indexOf("</script>")>-1&&(e=anchorme.dontbreakHTML(e,"script","src")),e.indexOf("</audio>")>-1&&(e=anchorme.dontbreakHTML(e,"audio","src")),e.indexOf("</button>")>-1&&(e=anchorme.dontbreakHTML(e,"button","formaction")),e.indexOf("</command>")>-1&&(e=anchorme.dontbreakHTML(e,"command","icon")),e.indexOf("</embed>")>-1&&(e=anchorme.dontbreakHTML(e,"embed","src")),e.indexOf("</html>")>-1&&(e=anchorme.dontbreakHTML(e,"html","manifest")),e.indexOf("</video>")>-1&&(e=anchorme.dontbreakHTML(e,"video","poster")),e.indexOf("</video>")>-1&&(e=anchorme.dontbreakHTML(e,"video","src")),e.indexOf("</applet>")>-1&&(e=anchorme.dontbreakHTML(e,"applet","codebase")),e.indexOf("</area>")>-1&&(e=anchorme.dontbreakHTML(e,"area","href")),e.indexOf("</base>")>-1&&(e=anchorme.dontbreakHTML(e,"base","href")),e.indexOf("</body>")>-1&&(e=anchorme.dontbreakHTML(e,"body","background")),e.indexOf("</frame>")>-1&&(e=anchorme.dontbreakHTML(e,"frame","src")),e.indexOf("</head>")>-1&&(e=anchorme.dontbreakHTML(e,"head","profile")),e.indexOf("longdesc")>-1&&(e=anchorme.dontbreakHTML(e,"img","longdesc")),e.indexOf("longdesc")>-1&&(e=anchorme.dontbreakHTML(e,"iframe","longdesc")),e.indexOf("usemap")>-1&&(e=anchorme.dontbreakHTML(e,"img","usemap")),e.indexOf("</link>")>-1&&(e=anchorme.dontbreakHTML(e,"link","href")),e.indexOf("</input>")>-1&&(e=anchorme.dontbreakHTML(e,"input","formaction")),e.indexOf("</source>")>-1&&(e=anchorme.dontbreakHTML(e,"source","src")),e=e.split("\n").join(" \n "),e=e.split(" (").join(" ( "),e=e.split(")").join(" )");var n=anchorme.order(e," ",a),r=anchorme.order(n,"\n",a);return r=r.split("( ").join("("),r=r.split(" )").join(")")};