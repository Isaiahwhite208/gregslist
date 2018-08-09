import JobService from "./jobService.js";

let jobService = new JobService()

function drawjobs() {
  let jobs = jobService.getjobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${job.title}</p>
        <p>${job.profession}</p>
        <p>${job.hours}</p>
        <p>${job.wage}</p>
        <p>${job.degrees}</p>
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