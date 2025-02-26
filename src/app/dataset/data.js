import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightIcon from '@mui/icons-material/Highlight';
import SchoolIcon from '@mui/icons-material/School';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FlareIcon from '@mui/icons-material/Flare';
const Menu=[
    {
        id: 1,
        title: "Paragaph Rewriter",
        link: "/",
    },
    {
        id: 2,
        title: "Paragaph Generator",
        link: "/paragraphgenerator"
    },
    {
        id: 3,
        title: "Sentence Rewriter",
        link: "/sentencerewriter"
    },
];
const Tabs=[
    {
        id: 1,
        title: "Normal",
        icon: <FormatColorFillIcon style={{color: '#D4BDAC'}}/>
    },
    {
        id: 2,
        title: "Fluent",
        icon: <BorderColorIcon style={{color: 'green'}}/>
    },
    {
        id: 3,
        title: "Formal",
        icon: <HighlightIcon style={{color: '#78B7D0'}}/>
    },
    {
        id: 4,
        title: "Innovative",
        icon: <TipsAndUpdatesIcon style={{color: 'orange'}}/>
    },
    {
        id: 5,
        title: "Coherent",
        icon: <FlareIcon style={{color: 'pink'}}/>
    },
    {
        id: 6,
        title: "Academic",
        icon: <SchoolIcon style={{color: 'black'}}/>
    },
];

// const Textparagraph=[
//     {
//         id: 1,
//         title: "Introducing Our AI-Based Paragraph Rewriter",
//         content: "Our paragraph rewriter utilizes AI models to understand the provided text before making changes to it. This helps it to avoid making any modifications that alter the meaning or context of the content. Thanks to this advanced functionality of our AI paragraph rewriting tool, you can trust it with all types of content, whether it is marketing copies or academic papers.",
//     },
//     {
//         id: 2,
//         title: "How to Use Rewrite Paragraph Tool?",
//         content: "Behind the scenes, our rewriter tool performs the following steps on the provided text: Checks and reads the text to properly understand it Determines the changeable and replaceable parts of the text Replaces the aforementioned parts with suitable alternatives and synonyms Checks the output to make sure it is true to the original meaning and context After that, the text is provided back to the user.",
//     },
// ];
const generatorTextparagraph=[
    {
        id: 1,
        title: "Understanding the Working and Functionality of Our Paragraph Generator",
        content: "The working and functionality at the backend of our paragraph generator are complex yet quite simple. Our tool works on generative AI. It uses AI models to understand the provided prompt along with the instructions/preferences. Then, using the data it has available, the tool creates a paragraph containing useful and insightful information. This paragraph generator is like ChatGPT, except that it is focused on creating paragraphs on specific topics. You can give it a prompt, which can be a single word or a detailed line of instructions. As long as it’s coherent and doesn’t ask for anything other than a paragraph(s), our tool will be able to understand it.",
    },
    
];
const benefitData=[
    {
        id: 1,
        title: "Save time and effort",
        content: "One of the main benefits of using an AI paragraph generator is that you can save time and effort. Instead of doing your research manually, finding all the key points to cover, writing a paragraph on them, and then checking it, you can simply use a tool and get all of these steps taken care of in a click. ",
    },
    {
        id: 2,
        title: "Gain ideas and inspiration",
        content: "Even if you don’t want to use the paragraph generator to create the entire content for you, you can still use it to gain ideas and inspiration. You can generate a few paragraphs and then get an idea of how you can write your own. This is an ideal use case for our tool in situations where AI tools are not allowed, such as school assignments.",
    },
    {
        id: 3,
        title: "Helps in consistency",
        content: "If you have to create a lot of paragraphs on different topics, using an AI generator can give you the benefit of consistency in writing style and tone. Since all of them will originate from a single source, they will be similar in terms of their wording and style.",
    },
];
const SentenceRewriteText=[
    {
        id: 1,
        title: "What is the Sentence Rewriter?",
        content: "Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely. Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.",
    },
    {
        id: 2,
        title: "How to Use Rewrite Sentence Tool?",
        content: "Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely. You can start using our AI Paragraph rewriter by following the below-given simple steps.",
    },
    {
        id: 3,
        title: "Why we need Sentence Rewriter?",
        content: "Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely. Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.",
    },
    {
        id: 4,
        title: "How to Use Rewrite Sentence Tool?",
        content: "Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely.Our AI paragraph rewriter is an online AI Rewriter tool that is designed to polish and improve existing paragraphs as well as words. It uses advanced systems that are supported by AI algorithms to rewrite paragraphs precisely. You can start using our AI Paragraph rewriter by following the below-given simple steps.",
    },
];
// cards data
const CardData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Enter Your Paragraph",
        content: "To get started, enter the paragraph that you want to rewrite. You can type it directly into the provided space or upload a file from your local storage.",
        color: "bg-gray-200"
    },
    {
        id: 2,
        image: "https://p.kindpng.com/picc/s/222-2225221_text-mining-icon-data-mining-icon-mining-icon.png",
        title: "Select the Rewriting Mode",
        content: "After entering the paragraph, select the mode that you want to use. Pick from the different modes, including Normal, Fluent, Formal, Innovative, Coherent, and Academic.",
        color: "bg-green-200"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Start the Rewriting Process",
        content: "Click on the “Rewrite” button to start the rewriting process. Wait for a few seconds for our tool to finish.",
        color: "bg-blue-200"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Copy or Download the Rewritten Text",
        content: "After the process is complete, click on the “Copy” or “Download” buttons to copy or save the text.",
        color: "bg-pink-200"
    },
];

// generator Paragraph section cards
const GenerateCardData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Enter paragraph topic",
        content: "To get started, enter the paragraph topic into the provided space. It can be a word, a phrase, a sentence, or even longer.",
        color: "bg-gray-200"
    },
    {
        id: 2,
        image: "https://p.kindpng.com/picc/s/222-2225221_text-mining-icon-data-mining-icon-mining-icon.png",
        title: "Select paragraph tone",
        content: "Next, select the tone that you want the paragraph to have. Choose between seven different tones, including Diplomatic, Formal, and Informal.",
        color: "bg-green-200"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Select length/number",
        content: "After that, select the length of the generated paragraphs along with the total number of paragraphs you need.",
        color: "bg-blue-200"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Copy/save the results",
        content: "Wait a few seconds for the paragraph(s) to be generated, and then copy or download the output using the provided buttons.",
        color: "bg-pink-200"
    },
];

const SentenceCardData=[
    {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/512/12966/12966676.png",
        title: "Input Paragraph",
        content: "Type, paste, or upload your original text into the input box of our AI rewriter tool.",
        color: "bg-gray-200"
    },
    {
        id: 2,
        image: "https://p.kindpng.com/picc/s/222-2225221_text-mining-icon-data-mining-icon-mining-icon.png",
        title: "Select Rewriting Mode",
        content: "Select a rewriting mode in which you want to rewrite a paragraph such as; Normal, Fuent, Formal, Academic, etc.",
        color: "bg-green-200"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogZzWhpoZ1cryosNOgZVJjJGQFAnBHZ-Y1g&s",
        title: "Start Rewriting Process",
        content: "Now, click on the “Rewrite” button to initiate the paragraph rewriting process.",
        color: "bg-blue-200"
    },
    {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637246.png",
        title: "Extract the Rewritten Paragraph",
        content: "Once the the AI Rewriter has rewritten your paragraph, directly “Copy” or “Download” its document file.",
        color: "bg-pink-200"
    },
];
// Featured Cards
const FeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Quick & Accurate",
        content: "Thanks to the AI-based functionality of our tool, you can perform the rewriting process quickly and accurately. The process takes a few seconds to complete, and the changes made to the paragraph are all in line with its existing context.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Completely Free to Use",
        content: "There are no paid plans or subscriptions that you have to worry about when using our tool. It is completely free to use. All the modes are unlocked for all users, and there is no paywall.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " No Registration Needed",
        content: "Not only is our tool free to use, but it also doesn’t require any registration. You don’t have to provide your email or phone number to get started. You also don’t have to remember or enter a password to log in.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Multiple Modes Available",
        content: "Our paragraph rewriter provides multiple modes. You can choose from the modes depending on your needs and requirements. Each mode makes different changes to the provided text.",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " Downloading and Uploading Feature",
        content: "You can upload files from your local storage to save time on copy-pasting. Once the process is complete, our tool allows you to download the rewritten paragraph in the form of a TXT or DOC file.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Large Input Limit",
        content: "With our AI paragraph rewriter, you can enter up to 1,500 words at the same time. Thanks to this large input limit, you can rewrite all types of paragraphs, whether it’s academic papers or blog content.",
    },
    {
        id: '07',
        style: {
            color: 'green',
        },
        title: " Plagiarism-Free & Unique Output",
        content: "The changes made to your paragraph are unique. The final output is plagiarism-free, and you can use it easily for your SEO content or academic content without any worries. ",
    },
    {
        id: '08',
        style:{
            color: "purple",
        },
        title: " Smart & Contextual Changes",
        content: "Not only are the changes made to the paragraph unique, but they are also smart and contextually suitable. Our tool analyzes the existing words and phrases and then utilizes the best possible alternatives for them.",
    },
    {
        id: '09',
        style: {
            color: 'blue',
        },
        title: " Integration with Other Tools",
        content: "There are other tools on our website that you can utilize along with the paragraph rewriter. You can navigate to the paragraph generator and the sentence rewriter by simply clicking on the provided buttons.",
    },
];
// paragraph Generator Feaatured Card
const GenerateFeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Quick outputs",
        content: "Our tool is fast, and it can provide you with unique paragraphs on any topic in a matter of seconds. It has a very quick working process.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Completely free to use",
        content: "There are no subscriptions or paid plans that you have to worry about when using our tool. It is completely free and requires no registration.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " Various paragraph tones to choose from",
        content: "You can choose the ideal tone for the generated paragraphs according to your needs and requirements.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Generate multiple paragraphs",
        content: "Our tool allows you to generate multiple paragraphs at the same time. You can create one, three, or five paragraphs at once.",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " Choose from different lengths",
        content: "With our paragraph generator, you can create detailed or concise paragraphs. Choose the required length before starting the generation process.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Word and character count",
        content: "Once the paragraph is generated, our tool provides you with the exact word and character count so that you know how long it is.",
    },
    {
        id: '07',
        style: {
            color: '#FF8343',
        },
        title: " Download results to your device",
        content: "Save the generated paragraphs to your device using the “Download” option. The paragraphs will be downloaded in the “.doc” format.",
    },
    {
        id: '08',
        style: {
            color: 'green',
        },
        title: " Quick copy option",
        content: "If you want to copy the paragraph(s) to your clipboard, you can click on the Copy icon and do it quickly in a second.",
    },
    {
        id: '09',
        style: {
            color: '#CC2B52',
        },
        title: " Plagiarism-free and accurate results",
        content: "The paragraphs provided by our tool are unique and plagiarism-free. They are also accurate and contain genuine information about the topic described by the user.",
    },
    
    
];

const SentenceFeaturedCardData=[
    {
        id: '01',
        style: {
            color: '#FF8343',
        },
        title: " Fast and Accurate",
        content: "Our paragraph rewriter rewrites content in a matter of seconds. You just have to input your paragraph and start the rewriting process. It will rewrite the paragraph accurately in no time.",
    },
    {
        id: '02',
        style: {
            color: 'green',
        },
        title: " Free to Use",
        content: "Rewrite your text with our AI Paragraph Rewriter for totally free. Our paragraph rewriting tool does not charge any kind of fee to make changes to your given content.",
    },
    {
        id: '03',
        style: {
            color: '#CC2B52',
        },
        title: " Contextual Rewriting",
        content: "Our free AI rewriter rewrites the content keeping in mind its context. It only replaced synonyms that fully describe the meaning of the original words.",
    },
    {
        id: '04',
        style: {
            color: '#4C4B16',
        },
        title: " Plagiarism Free Output",
        content: "This free AI rewrite tool removes all the instances of plagiarism from a given content. For this, it changes all the original words and phrases of paragraphs with unique and new ones.",
    },
    {
        id: '05',
        style:{
            color: "#EB5B00",
        },
        title: " High-Quality Result",
        content: "Our tool elevates the quality of paragraphs while rewriting them. For this, the paragraph rewriter removes redundancies, replaces jargon with clear words, and swaps out poor terms with engaging ones.",
    },
    {
        id: '06',
        style: {
            color: '#50B498',
        },
        title: " Connected With Other Tools",
        content: "To provide users with a smooth workflow, the AI rewriter is connected to multiple other writing tools including; Sentence Rewriter and AI Paragraph Generator. These AI tools are one click far away to uplift your productivity.",
    },
];
const AIToolData=[
    {
        id:1,
        content:"The free paragraph rewriter helps refine your writing and ensure it is clear and easier to understand."
    },
    {
        id:2,
        content:"Our AI Rewriter can simplify complex paragraphs, making them accessible to a wider audience."
    },
    {
        id:3,
        content:"The rewriting tool allows users to automatically set a desired writing tone in the paragraph."
    },
    {
        id:4,
        content:"The AI rewriter is efficient in removing keyword stuffing and repetitive phrases."
    },
    {
        id:5,
        content:"As compared to manual rewriting, our AI Rewriter can save you time and effort."
    },
    {
        id:6,
        content:"Our AI paragraph rewriter is completely free and unlimited to use."
    },
    {
        id:7,
        content:"Paragraph Rewriter can automatically turn your boring paragraphs into compelling ones."
    },
];
const Rewritertooldata=[
    {
        id:1,
        image:"https://cdn-icons-png.flaticon.com/512/354/354637.png",
        alt: "student",
        title:"Students",
        content: "Students can use our paragraph rewriting tool to improve the quality of their content. They can improve and polish the quality of their assignments before handing them in. Our tool provides an “Academic” tone for these users in particular.",
    },
    {
        id:2,
        image:"https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png?f=webp",
        alt: "Digital Marketing Expert",
        title:"Digital Marketing Expert",
        content: "Digital marketing experts often need to create content for their marketing campaigns, whether it’s in the form of website copies or catchy emails. They can use our AI rewriter to enhance the quality of their content before putting it to use.",
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToulW-McgQC_VHHzPM8izZw97Gaw81Iwoo0wfpoAFzdMJbj-_zaMpfgPMm8fsE0Ui33Y&usqp=CAU",
        alt: "Content Writers",
        title:"Content Writers",
        content: "Content writers have to write content on a regular basis. Whether freelance or full-time, a helpful tool such as our paragraph rewriter can come in handy for these professionals. It can give them ideas on improving the quality of their content and also remove any accidental plagiarism that may occur in their writing.",
    },
    {
        id:4,
        image:"https://thumbs.dreamstime.com/b/video-blogger-icon-web-eps-file-easy-to-edit-332010573.jpg",
        alt: "Bloggers and SEO Experts",
        title:"Bloggers and SEO Experts",
        content: "Bloggers and SEO experts have to create and edit content for their websites. They have to make sure that the content is high-quality and easy to read. Our tool can help them with this by improving the flow of the text and making it plagiarism-free.",
    },
];

const paragraphGeneratorTools=[
    {
        id:1,
        image:"https://cdn-icons-png.flaticon.com/512/354/354637.png",
        alt: "student",
        title:"Students",
        content: "Students can use our tool to quickly generate paragraphs on any topic they need. They can use our tool to get help with their assignments. Students don’t have to worry about plagiarism when generating paragraphs with this tool due to its AI-based working. ",
    },
    {
        id:2,
        image:"https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png?f=webp",
        alt: "Writers",
        title:"Writers",
        content: "Professional writers can make their everyday tasks quicker and easier with the help of our tool. They can generate paragraphs on topics that they’re confused about and then lightly modify them using their own working. The paragraph generator is also a great tool for research purposes, as it provides useful and insightful information on the provided topics.",
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToulW-McgQC_VHHzPM8izZw97Gaw81Iwoo0wfpoAFzdMJbj-_zaMpfgPMm8fsE0Ui33Y&usqp=CAU",
        alt: "Researchers",
        title:"Researchers",
        content: "Researchers often need to write statements and explanations during the course of their studies. When done manually, this can take time and effort. However, with the help of our tool, this problem doesn't remain. With a simple prompt, entire paragraphs can be created at the click of a button.",
    },
    {
        id:4,
        image:"https://thumbs.dreamstime.com/b/video-blogger-icon-web-eps-file-easy-to-edit-332010573.jpg",
        alt: "SEO experts",
        title:"SEO experts",
        content: "SEO experts often have to create content in the form of blogs, on-page copies, emails, etc. With our tool, they can transform a long and arduous writing journey into a one-click generator process.",
    },
];
const FAQsData=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "Is using a paragraph rewriter legal?",
        answer: "Yes, using a paragraph rewriter is legal as long as there is no deception involved. For example, you should only use the rewriter if you have permission from your employer/teacher to do so. If you’re simply experimenting on your own, then there is no problem."
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "Is the output provided by a paragraph rewriting tool unique and plagiarism-free?",
        answer: "Yes, the output provided by our tool is unique and plagiarism-free. The changes our rewriter makes to the text are enough to render the latter different from its original version."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "How long does it usually take for your tool to provide results?",
        answer: "Usually, our tool can scan and rewrite the provided paragraph within a few seconds. If the text is long and lengthy, the process can take up a bit more time."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "What other tools can I use on your platform?",
        answer: "There is a sentence rewriter and a paragraph generator that you can use on our website along with the paragraph rewriter."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "What is the purpose of having different rewriting modes?",
        answer: "The different rewriting modes help ensure that the rewriting is done according to your needs and requirements. For example, rewriting the text in the Academic mode will give it a crisp and formal tone."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "Will rewriting the paragraphs change their meaning?",
        answer: "No, rewriting the paragraphs using our tool does not change their meaning. Our tool uses AI to understand the meaning and context of the paragraphs so that the changes don’t modify either of them. "
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "What should I do if my paragraph(s) are longer than 1,500 words?",
        answer: "You can break your input content into smaller pieces so that they can be entered one by one into our tool. Although there is a 1,500-word limit on our rewriter, there is no limit on the number of times that you can use it."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "Where can I find the downloaded files on my device?",
        answer: "Usually, the Downloads folder is where you can find downloaded files on your device. However, if you have selected a different destination for the downloads, you will have to navigate to that particular folder."
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Does my content get used anywhere after I upload it to your website?",
        answer: "No, we don't utilize your content or share it with any third parties. Your data stays safe and private when you use our tool."
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "What is the best way to rewrite a paragraph?",
        answer: "The best way to rewrite a paragraph is to pick an AI rewriter (like ours) and then select the mode that suits your needs the best (such as Academic, Fluent, etc.)."
    },
];
const ParagraphFAQs=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "How does the paragraph generator work?",
        answer: "The paragraph generator utilizes generative AI. It analyzes and understands the provided input and then provides an output created from the data that it is trained on. "
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "Does the paragraph generator copy-paste content from somewhere?",
        answer: "No, our tool doesn't copy-paste content from a source. Rather, it uses its data to create a unique response to each prompt. You don’t have to worry about any duplication or plagiarism."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "Is it safe to use the paragraph generator?",
        answer: "Yes, the paragraph generator is safe to use. You don't have to provide any sort of details about yourself, nor will the tool ask you to enter your credit card details, etc. All you need to do is give the prompt and then copy/save the provided output."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "Is it legal/allowed to use the paragraph generator?",
        answer: "Using the paragraph generator is perfectly fine as long as you don't use it in a setting where online tools or generative AI tools are banned/disallowed. For example, if you are working for a client or company that has expressly prohibited the use of AI tools in the writing process, then you shouldn’t use our paragraph generator."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "Why should I use this paragraph generator instead of ChatGPT?",
        answer: "With ChatGPT, you first have to sign up using your email, and then you have to sign in. After that, if you want to generate a paragraph, you have to prepare a prompt detailing your requirements and topic. On the other hand, with our tool, there is no signup needed, nor do you have to make an elaborate prompt. Instead, you just have to enter the topic, adjust the settings as per your requirements, and then click on the button to start the process."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "What is the “Diplomatic” tone?",
        answer: "The diplomatic tone is a type of formal tone that you can use for professional emails, research papers, proposals, etc. "
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "What should I do if I don't like the quality of the generated paragraph?",
        answer: "If you don't like the quality of the generated paragraph, you can simply run the process again with the same prompt. Our tool will give you a different output, and you can check it to see if it suits your liking."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "Where do I find the downloaded paragraphs on my device?",
        answer: "You can find the downloaded files on your device in the Downloads folder. Or, if you have changed the download folder to some other destination, that is where you'll find the saved outputs from our tool."
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Will I get in trouble at school if I use your paragraph generator?",
        answer: "You won't get in trouble at school if there is no prohibition or ban on AI tools. However, if your teacher doesn't allow AI tools, such as content generators, then you shouldn't use our tool."
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "I want longer paragraphs. What should I do?",
        answer: "Simply select the “Detailed” option in the “Paragraph Length” drop-down menu. By making this selection, the generated paragraphs will be long and lengthy. "
    },
   
];

const SentenceFAQsData=[
    {
        id: 1,
        questionNo: "Q1: ",
        question: "How to rewrite my sentence?",
        answer: "To rewrite paragraphs, you can use the sentence Rewriter. It will automatically rewrite paragraph and convert them into a unique, compelling, and new style."
    },
    {
        id: 2,
        questionNo: "Q2: ",
        question: "Can I remove plagiarism from a sentence?",
        answer: "Yes, you can remove all instances of plagiarism from a paragraph using an online AI rewriter. All you need to do is to pass your paragraphs through the tool. The Paragraph rewriter will take no time to transform it from a plagiarized to a unique one."
    },
    {
        id: 3, 
        questionNo: "Q3: ",
        question: "Can AI sentence Rewriter make my academic essay more fluent?",
        answer: "Our AI online rewriter tool can help you make your academic essay more fluent. For this, you can try out our “Fluent” mode to make the required changes in your essay to make it more fluent."
    },
    {
        id: 4,
        questionNo: "Q4: ",
        question: "Is using the rewriter tool for paragraphs Legal?",
        answer: "Yes, using the online rewriter for your paragraphs is completely legal."
    },
    {
        id: 5,
        questionNo: "Q5: ",
        question: "How does the Paragraph Rewriter tool help me write an effective blog?",
        answer: "Paragraph rewriting tool will help you write an effective blog by uplifting the quality of your writing paragraphs. As a result, your blog post will be made more creative, unique, as well as compelling."
    },
    {
        id: 6,
        questionNo: "Q6: ",
        question: "How to rewrite my paragraph?",
        answer: "To rewrite paragraphs, you can use the Paragraph Rewriter. It will automatically rewrite paragraph and convert them into a unique, compelling, and new style."
    },
    {
        id: 7,
        questionNo: "Q7: ",
        question: "Can I remove plagiarism from a paragraph?",
        answer: "Yes, you can remove all instances of plagiarism from a paragraph using an online AI rewriter. All you need to do is to pass your paragraphs through the tool. The Paragraph rewriter will take no time to transform it from a plagiarized to a unique one."
    },
    {
        id: 8, 
        questionNo: "Q8: ",
        question: "Can AI Paragraph Rewriter make my academic essay more fluent?",
        answer: "Our AI online rewriter tool can help you make your academic essay more fluent. For this, you can try out our “Fluent” mode to make the required changes in your essay to make it more fluent."
    },
    {
        id: 9,
        questionNo: "Q9: ",
        question: "Is using the rewriter tool for paragraphs Legal?",
        answer: "Yes, using the online rewriter for your paragraphs is completely legal."
    },
    {
        id: 10,
        questionNo: "Q10: ",
        question: "How does the Paragraph Rewriter tool help me write an effective blog?",
        answer: "Paragraph rewriting tool will help you write an effective blog by uplifting the quality of your writing paragraphs. As a result, your blog post will be made more creative, unique, as well as compelling."
    },
    {
        id: 11,
        questionNo: "Q11: ",
        question: "How to rewrite my paragraph?",
        answer: "To rewrite paragraphs, you can use the Paragraph Rewriter. It will automatically rewrite paragraph and convert them into a unique, compelling, and new style."
    },
    {
        id: 12,
        questionNo: "Q12: ",
        question: "Can I remove plagiarism from a paragraph?",
        answer: "Yes, you can remove all instances of plagiarism from a paragraph using an online AI rewriter. All you need to do is to pass your paragraphs through the tool. The Paragraph rewriter will take no time to transform it from a plagiarized to a unique one."
    },
    {
        id: 13, 
        questionNo: "Q13: ",
        question: "Can AI Paragraph Rewriter make my academic essay more fluent?",
        answer: "Our AI online rewriter tool can help you make your academic essay more fluent. For this, you can try out our “Fluent” mode to make the required changes in your essay to make it more fluent."
    },
    {
        id: 14,
        questionNo: "Q14: ",
        question: "Is using the rewriter tool for paragraphs Legal?",
        answer: "Yes, using the online rewriter for your paragraphs is completely legal."
    },
    {
        id: 15,
        questionNo: "Q15: ",
        question: "How does the Paragraph Rewriter tool help me write an effective blog?",
        answer: "Paragraph rewriting tool will help you write an effective blog by uplifting the quality of your writing paragraphs. As a result, your blog post will be made more creative, unique, as well as compelling."
    },
    {
        id: 16,
        questionNo: "Q16: ",
        question: "How does the Paragraph Rewriter tool help me write an effective blog?",
        answer: "Paragraph rewriting tool will help you write an effective blog by uplifting the quality of your writing paragraphs. As a result, your blog post will be made more creative, unique, as well as compelling."
    },
];
const UsersInfo=[
    {
        id: 1,
        email:"abcd@gmail.com",
        subject:"rewrite data",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        id: 2,
        email:"hello@gmail.com",
        subject:"rewrite the sentence",
        message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
]
export default Menu;
export {Tabs,generatorTextparagraph,CardData,FeaturedCardData,AIToolData,Rewritertooldata,FAQsData,UsersInfo,ParagraphFAQs,GenerateCardData,benefitData, GenerateFeaturedCardData,paragraphGeneratorTools,SentenceCardData,SentenceRewriteText,SentenceFeaturedCardData,SentenceFAQsData};