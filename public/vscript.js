let f = document.querySelector('#f')
let answer;
let rbc = document.querySelector('#rbc');
let wbc = document.querySelector('#wbc');
let hmo = document.querySelector('#hmo');
let reparray=[]
let repindex=0;
let modeSelector = document.querySelector('#modeSelector')
let myChart = document.querySelector('#myChart')
function report(date,rbc,wbc,hmo){
	this.date=date
	this.rbc=rbc
	this.wbc=wbc
	this.hmo=hmo
}
function addReport(rep){
	reparray.push(rep);
	localStorage.reparray= JSON.stringify(reparray);
}
function print(){

	let string = `"file", ${f.files[0]}, "${f.files[0].name}"`
    console.log(string)
    const data = new FormData();
	data.append("file", f.files[0], `${f.files[0].name}`);
	
	const options = {
		method: 'POST',
		headers: {
			'X-RapidAPI-Key': '547550b7e2msh9d4ef5e830e2e90p19764bjsn0bf84328d5eb',
			'X-RapidAPI-Host': 'pdf-to-text-converter.p.rapidapi.com'
		},
		body: data
	};
	
	fetch('https://pdf-to-text-converter.p.rapidapi.com/api/pdf-to-text/convert', options)
	.then(response => response.text())
	//.then(response => p.textContent = response)
	.then(response => answer = response)
	.then(()=>{
		parseData(answer)
		rbc.textContent='Red Blood Cells: '+searchData('rbc',answer)
		wbc.textContent='White Blood Cells: '+searchData('wbc',answer)
		hmo.textContent='Hemoglobin: '+searchData('Hemoglobin',answer)
	})
	.catch(err => console.error(err));
}
let p = 'The Complete Blood Count Sample Report Different laboratories generate reports that can vary greatly in appearance and in the order and kind of information included. This is one exampl e of what a lab report for a Complete Blood Count may look like. Names and places used have been made up for illustrativ e purposes only. Point your cursor at a number to l earn about the different report elements. University Medical Center, Dept. of Pathology Report Date/Time: 123 University Way, City, ST 12345 02/10 /2014 16:40 Name: Doe, John Q. Age/Sex: 73/M DOB: 01/01/1941 Patient ID: 987654321 Status: Routine Ordering Dr: Smith, Peter MD Physician Copy for: Smith, Jane MD SPEC #: 223456 Collection Date/Time: 02/10/14 14:30 Received Date/Time: 02/10/14 15:00 SPEC IMEN: Whole blood ORDERED: Complete Blood Count and White Blood Cell Differential QUERIES: [Comments and testing instructions] Test Normal Abnormal Flag Units Reference Range COMPLETE BLOOD COUNT White Blood Cell (WBC) 6.9 K/mcL 4.8-10.8 Red Blood Cell (RBC) 1.8 L M/mcL 4.7-6.1 Hemoglobin (HB /Hgb)) 6.5 L** g/dL 14.0- 18.0 Hematocrit (HCT) 19.5 L** % 42- 52 Mean Cell Volume (MCV) 109.6 H fL 80 -100 Mean Cell Hemoglobin (MCH) 36.5 H pg 27. 0-32.0 Mean Cell Hb Conc (MCHC) 33.3 g/dL 32.0 -36.0 Red Cell Dist Width (RDW) 16.0 H % 11.5 -14.5 Platelet count 180 K/mcL 150 -450 Mean Platelet Volume 7.9 fL 7.5 -11.0 3%( )7665:59=748 Neutrophil (Neut) 50 % 33-73 Lymphocyte (Lymph) 36 % 13-52 Mono cyte (Mono) 8 % 0-10 Eosinophil (Eos) 5 % 0 -5 Basophil (Baso) 1 % 0-2 Neutrophil, Absolute 3.5 K/mcL 1.8 -7.8 Lymphocyte, Absolute 2.5 K/mcL 1.0 -4.8 Monocyte, Absolute 0.6 K/mcL 0-0.8 Eosinophil, Absolute 0.4 K/mcL 0-0.45 Basophil, Abso lute 0.1 K/mcL 0-0.2 Flag Key: L= Abnormal Low, H= Abnormal High, **= critical value Comment: **Hgb of 6.5 and Hct of 19.5 reported to Dr. J Smith at 15:20 on 2/10/14 by M. Peters ** END OF REPORT ** 1. Name and address of the lab where the test was performed. Tests may be run in a physician office lab, a lab located in a clinic or hospital, and/or samples may be sent to a reference laboratory for analysis. 2. Date this copy of the report was printed. This date may be different than the date the results were generated, especially on cumulative reports (those that include results of several different tests run on different days). 3. Patient name or identifier. Links results to the correct person. 4. Patient identifier and identification number. Links results to the correct person. 5. Name of doctor. The lab will send the results to the doctor(s) or other healthcare practitioners listed. 6. Status of the test request, such as Routine or STAT (perform test as rapidly as possible). 7. Unique identification number(s). Number(s) assigned to the sample(s) when it arrives at the laboratory. 8. Test requested is a CBC and WBC differential. 9. Information about the person and blood sample. Any pertinent information regarding the patients test preparation or the condition of specimen may be noted here. 10. The date and time of sample collection 11. The date and time that the laboratory received the sample. 12. A listing of the individual items that are being evaluated. Test names may be abbreviated on lab reports. You can look for these test names or abbreviations in the pull-down menu on the home page of this site or type the name into the search box to find information on specific tests. 13. A listing of the CBC and differential results that are normal. 14. A listing of the CBC and differential results that are abnormal. 15. An H in this column may mean that the result is higher than the reference range. L may mean low. Either represents a result outside the reference range/value. 16. Units of measurement (for quantitative results). The units of measurement that labs use to report your results can vary from lab to lab. Regardless of the units that the lab uses, your results will be interpreted in relation to the reference ranges supplied by the laboratory. 17. Reference intervals (or reference ranges). These are the ranges in which normal values are expected to fall. The ranges that appear on your report are validated and supplied by the laboratory that performed your test. 18. Critical results are dangerously abnormal results that must be reported immediately to the responsible person, such as the ordering physician. The laboratory will often draw attention to such results with an asterisk (*) or something similar and will usually note on the report the date and time the responsible person was notified. 1 i o 18 17 16 15 14 13 12 11 10 r p n m l s THE COMPLETE BLOOD COUNT SAMPLE REPORT Different laboratories generate reports that can vary greatly in appearance and in the order and kind of information included. This is one example of what a lab report for a Complete Blood Count may look like. Names and places used have been made up for illustrative purposes only. The numbered key to the right explains a few of the report elements. EXAMPLE ONLY'
function parseData(p){
	let r = searchData('rbc',p)
	let w = searchData('wbc',p)
	let h = searchData('Hemoglobin',p)
	let rep = new report(`Report ${++repindex}`,r,w,h)
	addReport(rep);
	console.log(reparray);
	reloadChart();
}
function searchData(value, text) {
	let pat = new RegExp(`${value}`,'i')
	if(value=='Hemoglobin'){
		pat=/hemoglobin|haemoglobin/i
	}
	console.log(pat)
	let wordstartindex = text.search(pat);
	if(wordstartindex==-1)
		return 0;
	let i = wordstartindex;
	let flag = 0;
	let numberpattern = /[0-9|.]/;
	let numberstartindex = -1;
	let numberendindex = -1;
	while (true) {
	  if (flag == 0 && numberpattern.test(text.charAt(i))) {
		numberstartindex = i;
		flag = 1;
	  }
	  if (flag == 1 && !numberpattern.test(text.charAt(i))) {
		numberendindex = i;
		break;
	  }
	  i++;
	}
	console.log(wordstartindex);
	console.log(numberstartindex);
	console.log(numberendindex);
	return text.slice(numberstartindex, numberendindex);
  }
  modeSelector.addEventListener('change',()=>{
	reloadChart();
  })
  function loadChart(mode){
  const ctx = document.querySelector('#myChart');
  console.log(mode)
  ctx.innerHTML=''
    let lblarray = []
    let datarray = []
	reparray.forEach((i)=>{
		lblarray.push(i.date)
		datarray.push(i[`${mode}`])
		console.log(i[mode])
	})
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: lblarray,
        datasets: [{
            label: 'Count',
            data: datarray,
            borderWidth: 1
        }]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}
function reloadChart(){
	let parent=document.querySelector('#myChart').parentElement
	document.querySelector('#myChart').remove();
	let can = document.createElement('canvas')
	can.setAttribute('id','myChart')
	parent.appendChild(can)
	loadChart(modeSelector.value)
}
function initialize(){
	if(localStorage.reparray!=null && localStorage.reparray.length!=2){
		reparray=JSON.parse(localStorage.reparray)

	}
	loadChart(modeSelector.value)
}
initialize()
window.addEventListener('beforeprint', () => {
	myChart.resize(600, 600);
  });
  window.addEventListener('afterprint', () => {
	myChart.resize();
  });
   