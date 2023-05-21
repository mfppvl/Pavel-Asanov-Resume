document.addEventListener('DOMContentLoaded', function(){
    var datainput = document.getElementById(`request-input`)    
        $("#request-input").on('keydown', function(event){
        if (event.keyCode === 13) {

        var cls = 'cls'
        var date = 'date'
        var ip = 'ip'
        var address = 'address'
        var print = 'print'
        var reboot = 'reboot'
        var empty = ''
        var dt = new Date()
        var text = datainput.value
        var checkLower = text.toLowerCase()   
        var check = checkLower.trim()
        var myData = { 
            name: '<p>Pavel Asanov</p>', 
            expertise: '<p><b>Operations Management, Project Management, Strategic Planning, Startups</b></p>', 
            summary:'<p>Business strategist with extensive experience driving business growth by building and leading global cross-functional and customer-focused teams in product innovation and entrepreneurial business initiatives. Innate ability to identify and assess partner needs, negotiate deals, and drive mutual success by developing operational plans/process improvements. Articulate communicator with a consultative sales style, strong problem-solving abilities, and a keen client needs assessment aptitude. Establish and nurture productive partnerships with C-level executives and close enterprise level deals pertaining to increase profitability. Skilled in impacting bottom line by increasing scalability, process efficiency, and product enhancement. Discrete when handling confidential information.</p>', 
            skills:'<p>Strategic Operational Leadership, Project Management, Innovation Management, Strategy Development, Strategy Execution, Business Partnerships, Business Operations, New Business Development, Go-to-Market Strategies, Customer Experience, Process Automation & Improvement, Product Management, Global Team Management, Peer Mentorship, Risk Management, Financial Planning, Startups, Public speaking, Zoho-Analytics, SAS Viya, Blockchain, Web3, NFT, SaaS, Excel, Flowcharts; Basic knowledge of SQL, Python, HTML, JavaScript, Solidity</p>',
            experience: '<p><b>Finta Inc, Chief Operating Officer</b>, New York, NY, 2018-Present </p> <p>* In collaboration with the founding team members, designed a strategic operational plan and growth roadmap introducing agile go-to-market initiatives to ensure accelerated market penetration and product adoption for a blockchain-based equity management platform.</p> <p>* Oversaw daily business operations supporting a team of 5 with a startup/bootstrapped budget. </p> <p>* Led development of capitalization table management software, including creating development documentation and deployment to the production environment 5 months ahead of the anticipated schedule. </p> <p>* Implemented changes to ERC20 to develop proof-of-concept token in compliance with Transfer Agent requirements for managing a capitalization table on an Ethereum blockchain.</p> <p>* Navigated federal compliance regulations to secure SEC Transfer Agent approval. </p>   <p>* Negotiated business partnership with a provider of 409A valuations.</p> <p><b> &ensp;</b></p> <p><b>SOUND FACETS LLC, Managing Partner</b>, New York, NY	2004-2018</p>  <p>*	Co-founded and scaled a security services company from zero to successful and thriving business.</p> <p></p> <p>* Negotiated business partnerships with industry leaders, including: ADI, Alarm.com & Telguard. </p> <p>*	Oversaw project management portfolio for commercial and retail customers.</p> <p>* Built a strategic initiative focused on improving profitability and team productivity, achieving 10% to 20% profitability increases per project. </p>' ,
            education: '<p><b>Global Master of Business Administration (MBA)</b>, Macquarie Graduate School of Management, 2022</p> <p><b>Engineering in Electrical Electronics and Communication</b>, Tashkent College of Informatics & Computer Engineering, 1997</p> ' ,
            certifications: '<p><b>Project Management Professional (PMP)</b>, Project Management Institute </p> <p><b>ITIL Foundation Level</b>, AXELOS Global Best Practice</p> <p><b>Venture Deals</b>, Kauffman Fellows & TechStars</p> <p><b>Disney`s Approach to Creativity and Innovation</b>, Disney Institute </p> <p><b>Disney`s Approach to Leadership Excellence</b>, Disney Institute</p> <p><b>Disney`s Approach to Quality Service</b>, Disney Institute</p>',
            volunteer:'<p><b>The Founder Institute, Mentor</b>, New York, NY, 2012-Present</p> <p>* Lead customer discovery, product development, and fundraising training sessions. </p> <p>* Advising on developing market entry strategies, scaling, and dynamic pricing modeling for a sustainable business. </p> <p>* Helped to launch over 200 companies across multiple industries.</p> p><b> &ensp;</b></p> <p><b>Macquarie University Incubator, Mentor</b>,New South Wales, Australia	2021-Present</p> <p>* Launch strategy and lean product development and fundraising training for startup founders.</p> <p>* One-on-one mentoring startup founders.</p>',
            publications: '<p>Connecting through Kinect: A Participatory Approach to Designing a Collaborative Emotion Recognition Game with and for Autistic Individuals May 11, 2018 International Society for Autism Research <a href="https://insar.confex.com/insar/2018/webprogram/Paper28546.html" target="_blank">insar.confex.com</a></p> <p>Connecting Through Kinect: Designing and Evaluating a Collaborative Game with and for Autistic Individuals Feb 2017  <a href="https://www.researchgate.net/publication/313572238_Connecting_Through_Kinect_Designing_and_Evaluating_a_Collaborative_Game_with_and_for_Autistic_Individuals" target="_blank">researchgate.net</a></p>',
            projects: '<p>Autism Research with Microsoft Kinect V2 A research study conducted by Dr. Kristen Gillespie-Lynch, from the Psychology Department at the College of Staten Island, CUNY Feb 2015 - May 2018.</p> <p>Advanced Coma Patient Monitoring System with Kinect V2 integration Designed and Developed at Kinect V2 Hackathon Austin, Texas. 2nd place winner February, 2015.</p>',
            languages: '<p>Native fluency in <b>English</b> and <b>Russian</b>. Elementary proficiency in <b>Japanese</b>.</p>',

            help: '<table> <tr> <td>ABOUT </td>  <td>&emsp; Displays link to about page.</td> </tr> <tr> <td>CERTIFICATIONS </td>  <td>&emsp; Displays list of certifications and licenses.</td> </tr> <tr> <td>CLS</td> <td>&emsp; Clears the screen.</td> </tr> <tr> <td>CONTACT </td>  <td>&emsp; Displays a contact information.</td> </tr> <tr> <td>CREDITS</td> <td>&emsp; Award/AMI BIOS boot screen credits. </td> </tr>  <tr> <td>DATE </td>  <td>&emsp; Displays today`s date.</td> </tr> <tr> <td>DIR </td>  <td>&emsp; Displays a list of files and subdirectories in a directory.</td> </tr> <tr> <td>EDUCATION </td>  <td>&emsp; Displays educational experience.</td> </tr> <tr> <td>EXPERIENCE </td>  <td>&emsp; Displays professional experience.</td> </tr> <tr> <td>EXPERTISE</td> <td>&emsp; Displays key areas of expertise and expirience.</td> </tr> <tr> <td>HELP</td>   <td>&emsp; Provides Help information for OS commands.</td> </tr>    <tr> <td>NAME</td> <td>&emsp; Displays name. </td></tr> <tr> <td>LANGUAGES </td><td>&emsp; Displays language proficiency levels.</td></tr> <tr> <td>PRINT </td>  <td>&emsp; Prints a text.</td> </tr> <tr> <td>PROJECTS </td>  <td>&emsp; Displays noteble projects.</td> </tr> <tr> <td>PUBLICATIONS </td>  <td>&emsp; Displays list of contributions to scholarly publishings.</td> </tr> <tr> <td>REBOOT </td>  <td>&emsp; Reboots operating system. </td> </tr> <tr> <td>RESUME </td>  <td>&emsp; Displays resume. </td> </tr> <tr> <td>SKILLS </td>  <td>&emsp; Displays some of the skills.</td> </tr> <tr> <td>SUMMARY </td>  <td>&emsp; Displays professional highlights.</td> </tr> <tr> <td>VER </td>  <td>&emsp; Displays a release version number.</td> </tr> <tr> <td>VOLUNTEER </td>  <td>&emsp; Displays volunteer experience. </td> </tr> <tr> <td> </td>  <td>&emsp; </td>   </tr  </table>',
            contact: '<p>How to contact me => <a href="https://www.linkedin.com/in/pavelasanov/" target="_blank">LinkedIn</a></p>',
            about: '<p>About Pavel Asanov => <a href="https://pasanov.com/pavel-asanov-about.html" >About</a></p>',
            startups: '<p>Startups Pavel mentored => <a href="https://pasanov.com/pavel-asanov-startups.html" >Startups</a></p>',
            ver: '<p>Pavel Asanov resume version 1.2</p>',  
            resume: '<p>Warning Spoiler Alert <a href="pavel-asanov-resume.html">Full Resume</a></p></p>',
            dir: '<table> <tr> <td>index.html </td>  <td>&emsp; </td> </tr> <tr> <td>main.js </td>  <td>&emsp; </td> </tr> <tr> <td>stlyle.css </td>  <td>&emsp; </td> </tr> <tr> <td> </td>  <td>&emsp; </td> </tr> </table>',
            chkdsk: '<p><b>Congratulations you disovered easter egg!</b></p> <p> Access Denied as you do not have sufficient privileges or the disk may be locked by another process. You have to invoke this utility running in elevated mode and make sure the disk is unlocked.</p>',
            email: '<p>pavelsnv@gmail.com</p>',
            www: '<p>http://pasanov.com</p>',
            credits: '<p>Big thanks to <a href="https://github.com/ManzDev/twitch-manzdev-bios" target="_blank">ManzDev</a> for the development of the Award BIOS boot screen replica (It saved me a ton of time)</p>',
        };
        
        var respond = myData[check]            

        if (check in myData) {
            document.getElementById('response').innerHTML += `<p>C:\\${datainput.value}</p>` + respond;
            if (window.outerWidth && window.outerWidth > 480) {
                window.scrollBy(0, window.innerHeight);
            }
            
        } else if (check === cls) {
            document.getElementById('response').innerHTML = `<p></p>`
        } else if (check === date) {
            document.getElementById('response').innerHTML += `<p>${dt}</p>`
            window.scrollBy(0, window.innerHeight);
        } else if (check === print) {
            window.print()
        } else if (check === reboot) {            
            window.location.href = "index.html";
        } else if (datainput.value === ip || datainput.value === address) {
            $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
                document.getElementById('response').innerHTML += `<p><b>Congratulations you disovered easter egg!</b></p><p>${(JSON.stringify(data, null, 2)
                )} ,/p>`;
                if (window.outerWidth && window.outerWidth > 480) {
                    window.scrollBy(0, window.innerHeight);
                }
                
            })
        } else if ((datainput.value === empty)) {
            response.innerHTML += `<p class="dark">C:\\</p>`
            if (window.outerWidth && window.outerWidth > 480) {
                window.scrollBy(0, window.innerHeight);
            }
            
        } else {
            response.innerHTML += `<p class="dark"> C:\\${datainput.value} </p> <p>'${datainput.value}' is not recognized as an internal or external command,
            operable program or batch file. Hint: Help.</p>`
            if (window.outerWidth && window.outerWidth > 480) {
                window.scrollBy(0, window.innerHeight);
            }
            
        }
            event.preventDefault()
            event.currentTarget.value = "" /* clears input text */
    }
       else if (event.keyCode === 27) {
            event.preventDefault()
            event.currentTarget.value = "" /* clears field text */
    }
    })

    //Always blinking cursor code
    var inputField = document.getElementById("request-input");
    inputField.style.caretColor = "white"; // Set the caret color to white
    // inputField.style.caretWidth = "2px"; // Set the caret width to 2px
    inputField.style.caretHeight = "100%"; // Set the caret height to 100%
    inputField.style.caretStyle = "solid"; // Set the caret style to "solid"
    inputField.style.caretBlinkRate = "400"; // Set the caret blink rate to 400ms
  
    // Hide the caret when the input field is not focused
    inputField.addEventListener("focus", function() {
      inputField.style.caretColor = "white";
    });
    inputField.addEventListener("blur", function() {
      inputField.style.caretColor = "transparent";
    });
})

