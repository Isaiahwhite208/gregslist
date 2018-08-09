import job from '../../models/job.js'

let jobs = []

export default class jobService {
  constructor() {

  }

  getjobs() {
    let jobsCopy = []

    jobs.forEach(job => {
      jobsCopy.push(new job(
        job.title,
        job.profession,
        job.hours,
        job.wage,
        job.degrees,
        job.imgUrl
      ))
    })
    return jobsCopy
  }

  addjob(formData) {
    let newjob = new job(
      formData.title.value,
      formData.profession.value,
      formData.hour.value,
      formData.wage.value,
      formData.degrees.value,
      formData.imgUrl.value
    )
    jobs.push(newjob)
    console.log(jobs)

  }
}