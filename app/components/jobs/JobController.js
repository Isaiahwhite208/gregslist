import JobService from "./jobService.js";

let jobService = new JobService()

function drawjobs() {
  let jobs = jobService.getjobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Title: ${job.title}</p>
        <p>Profession: ${job.profession}</p>
        <p>Hours: ${job.hours}</p>
        <p>Wage: ${job.wage}</p>
        <p>Degree(s): ${job.degrees}</p>
        <img src="${job.imgUrl}" alt="somethingelse">
    </div>
    `
  }

  document.getElementById('jobs').innerHTML = template


}

export default class jobController {

  constructor() {
    drawjobs()
  }

  addjob(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    jobService.addjob(formData)
    formData.reset()
    drawjobs()
  }

}