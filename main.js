document.addEventListener('DOMContentLoaded', function(){
    var datainput = document.getElementById(`request-input`)    
        $("#request-input").on('keydown', function(event){
        if (event.keyCode === 13) {

        var cls = 'cls'
        var date = 'date'
        var ip = 'ip'
        var address = 'address'
        var print = 'print'
        var empty = ''
        var dt = new Date()
        var text = datainput.value
        var check = text.toLowerCase()    
        var myData = { 
            name: '<p>Pavel Asanov</p>', 
            expertise: '<p><b>Operations Management, Project Management, Strategic Planning, Startups</b></p>', 
            summary:'<p>Executive leader with expertise in all facets of product development, strategic analyses, financial management, and project management. My career in business leadership allowed me to develop skills in collaborating with all organization members to achieve business and financial objectives. Thanks to my skills and passion for achieving success, I have been instrumental in streamlining and improving processes, enhancing productivity, and implementing technology solutions.</p>', 
            skills:'<p>Business partnerships, Project management, Product management, Strategic planning & analysis, Strategic partnerships, Global team management, New business development, Go-to-market strategies, Strategic product roadmaps, Product vision development, Process improvements, Blockchain, Ethereum, Startups & lean canvas, Electrical engineering, Peer mentorship, Strategy development, Research, Public Speaking</p>',
            experience: '<p><b>Excel Security Corp, Director Of Business Operations</b>, New York, NY 	2020-Present </p> <p>* Reorganized management of security installation division team. Increased operational efficiency 50+%.</p> <p>* Coached and provided on-the-job training to the security division. Brought all team members up to industry standards.</p> <p>* Collaborated with senior executives across the organization to build an integrated system for the product, marketing, sales operations, client installation and service and support, pricing, and contracts.</p> <p><b>Finta Inc, Chief Operating Officer</b>, New York, NY, 2018-2020 </p> <p>* Developed operational, strategic plan and collaborated with c-suite leadership on agile go-to-market strategies to ensure accelerated market penetration and product adoption.</p> <p>* Led overall operational direction, administrative functions, and cost efficiency for internal day-to-day business operations. </p> <p>* Solved complex product and project management challenges during launch of a disruptive equity management platform in the FinTech industry. </p> <p>* Wrote source code for managing a capitalization table on an Ethereum main net.</p> <p>* Navigated regulations to secure SEC Transfer Agent approval. </p> <p><b>SOUND FACETS LLC, Managing Partner</b>, New York, NY	2004-2018</p>  <p>*	Co-founded and grew a security services company from scratch to 2,000+ recurring customers and $2+M in yearly revenue. </p> <p></p> <p>* Negotiated business partnerships with industry leaders, including: ADI, Alarm.com & Telguard.</p> <p>*	Oversaw project management portfolio for commercial and residential security systems</p> <p>* Created strategic initiatives arm focused on improving profitability and team productivity. </p> <p>* Strengthened internal business operations, business development, and project management best practices to reduce costs by 10% per year.  </p>' ,
            education: '<p><b>Global Master of Business Administration</b>, Macquarie Graduate School of Management, 2023</p> <p><b>Engineering in Electrical Electronics and Communication</b>, Tashkent College of Informatics & Computer Engineering, 1997</p> ' ,
            certifications: '<p><b>Project Management Professional (PMP)</b>, Project Management Institute </p> <p><b>ITIL Foundation Level</b>, AXELOS Global Best Practice</p> <p><b>Venture Deals</b>, Kauffman Fellows & TechStars</p> <p><b>Disney`s Approach to Creativity and Innovation</b>, Disney Institute </p> <p><b>Disney`s Approach to Leadership Excellence</b>, Disney Institute</p> <p><b>Disney`s Approach to Quality Service</b>, Disney Institute</p>',
            volunteer:'<p><b>The Founder Institute, Mentor</b>, New York, NY, 2012-Present</p> <p>* Providing training sessions semester for startup founders.</p> <p>* Worked side-by-side with new startup founders. Taught best practices in scaling new ventures, developing market entries strategies and dynamic pricing models for a sustainable business. Shared feedback with participants weekly. </p> <p>* Helped to launch over 200 companies.</p> <p><b>Macquarie University Incubator, Mentor</b>,New South Wales, Australia	2021-Present</p> <p>* Product development training sessions.</p> <p>* One-on-one mentoring startup founders.</p>',
            publications: '<p>Connecting through Kinect: A Participatory Approach to Designing a Collaborative Emotion Recognition Game with and for Autistic Individuals May 11, 2018 International Society for Autism Research <a href="https://insar.confex.com/insar/2018/webprogram/Paper28546.html" target="_blank">insar.confex.com</a></p> <p>Connecting Through Kinect: Designing and Evaluating a Collaborative Game with and for Autistic Individuals Feb 2017  <a href="https://www.researchgate.net/publication/313572238_Connecting_Through_Kinect_Designing_and_Evaluating_a_Collaborative_Game_with_and_for_Autistic_Individuals" target="_blank">researchgate.net</a></p>',
            projects: '<p>Autism Research with Microsoft Kinect V2 A research study conducted by Dr. Kristen Gillespie-Lynch, from the Psychology Department at the College of Staten Island, CUNY Feb 2015 - May 2018.</p> <p>Advanced Coma Patient Monitoring System with Kinect V2 integration Designed and Developed at Kinect V2 Hackathon Austin, Texas. 2nd place winner February, 2015.</p>',
            languages: '<p>Native fluency in <b>English</b> and <b>Russian</b>. Elementary proficiency in <b>Japanese</b>.</p>',

            help: '<table> <tr> <td>CERTIFICATIONS </td>  <td>&emsp; Displays list of certifications and licenses.</td> </tr> <tr> <td>CLS</td> <td>&emsp; Clears the screen.</td> </tr> <tr> <td>CONTACT </td>  <td>&emsp; Displays a contact information.</td> </tr> <tr> <td>DATE </td>  <td>&emsp; Displays today`s date.</td> </tr> <tr> <td>DIR </td>  <td>&emsp; Displays a list of files and subdirectories in a directory.</td> </tr> <tr> <td>EDUCATION </td>  <td>&emsp; Displays educational experience.</td> </tr> <tr> <td>EXPERIENCE </td>  <td>&emsp; Displays professional experience.</td> </tr> <tr> <td>EXPERTISE</td> <td>&emsp; Displays key areas of expertise and expirience.</td> </tr> <tr> <td>HELP</td>   <td>&emsp; Provides Help information for OS commands.</td> </tr>    <tr> <td>NAME</td> <td>&emsp; Displays name. </td></tr> <tr> <td>LANGUAGES </td><td>&emsp; Displays language proficiency levels.</td></tr> <tr> <td>PRINT </td>  <td>&emsp; Prints a text.</td> </tr> <tr> <td>PROJECTS </td>  <td>&emsp; Displays noteble projects.</td> </tr> <tr> <td>PUBLICATIONS </td>  <td>&emsp; Displays list of contributions to scholarly publishings.</td> </tr> <tr> <td>SKILLS </td>  <td>&emsp; Displays some of the skills.</td> </tr> <tr> <td>SUMMARY </td>  <td>&emsp; Displays professional highlights.</td> </tr> <tr> <td>VER </td>  <td>&emsp; Displays a release version number.</td> </tr> <tr> <td>VOLUNTEER </td>  <td>&emsp; Displays volunteer experience. </td> </tr> <tr> <td> </td>  <td>&emsp; </td>   </tr  </table>',
            contact: '<p>How to contact me => <a href="https://www.linkedin.com/in/pavelasanov/" target="_blank">LinkedIn</a></p>',
            ver: '<p>Pavel Asanov resume version 1.1</p>',  
            resume: '<p>Warning Spoiler Alert <a href="pavel-asanov-resume.html">Full Resume</a></p></p>',
            dir: '<table> <tr> <td>index.html </td>  <td>&emsp; </td> </tr> <tr> <td>main.js </td>  <td>&emsp; </td> </tr> <tr> <td>stlyle.css </td>  <td>&emsp; </td> </tr> <tr> <td> </td>  <td>&emsp; </td> </tr> </table>',
            chkdsk: '<p><b>Congratulations you disovered easter egg!</b></p> <p> Access Denied as you do not have sufficient privileges or the disk may be locked by another process. You have to invoke this utility running in elevated mode and make sure the disk is unlocked.</p>',
        };
        
        var respond = myData[check]            

        if (check in myData) {
            document.getElementById('response').innerHTML += `<p>C:\\>${datainput.value}</p>` + respond;
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
        } else if (datainput.value === ip || datainput.value === address) {
            $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
                document.getElementById('response').innerHTML += `<p><b>Congratulations you disovered easter egg!</b></p><p>${(JSON.stringify(data, null, 2)
                )} ,/p>`;
                if (window.outerWidth && window.outerWidth > 480) {
                    window.scrollBy(0, window.innerHeight);
                }
                
            })
        } else if ((datainput.value === empty)) {
            response.innerHTML += `<p class="dark">C:\\></p>`
            if (window.outerWidth && window.outerWidth > 480) {
                window.scrollBy(0, window.innerHeight);
            }
            
        } else {
            response.innerHTML += `<p class="dark">C:\\>${datainput.value}</p><p>'${datainput.value}' is not recognized as an internal or external command,
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
})

