package com.sarthak.job_listing_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sarthak.job_listing_backend.model.Job;
import com.sarthak.job_listing_backend.service.JobService;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "*"
    
)
public class JobController {

    @Autowired
    JobService service;


    // CREATE
    @PostMapping("/addjob")
    public Job create(
            @RequestBody Job job
    ){

        return service.addJob(job);

    }


    // READ ALL
    @GetMapping("/alljobs")
    public List<Job> getAll(){

        return service.getJobs();

    }


    // READ ONE
    @GetMapping("/{id}")

    public Job getOne(

            @PathVariable int id

    ){

        return service.getJob(id);

    }


    // UPDATE
    @PutMapping("/{id}")

    public Job update(

            @PathVariable int id,

            @RequestBody Job job

    ){

        return service.updateJob(
                id,
                job
        );

    }


    // DELETE
    @DeleteMapping("/{id}")

    public String delete(

            @PathVariable int id

    ){

        service.deleteJob(id);

        return "Deleted Successfully";

    }
    

@GetMapping("/search/{keyword}")

public List<Job> search(
        @PathVariable String keyword
){

    return service.search(keyword);

}

}
