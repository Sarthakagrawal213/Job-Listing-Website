package com.sarthak.job_listing_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sarthak.job_listing_backend.model.Job;
import com.sarthak.job_listing_backend.repo.JobRepository;

@Service
public class JobService {

    @Autowired
    JobRepository repo;


    // CREATE
    public Job addJob(Job job){
        return repo.save(job);
    }


    // READ ALL
    public List<Job> getJobs(){
        return repo.findAll();
    }


    // READ ONE
    public Job getJob(int id){

        return repo.findById(id)
                .orElse(null);
    }


    // UPDATE
    public Job updateJob(
            int id,
            Job job
    ){

        Job old=
                repo.findById(id)
                .orElse(null);

        if(old==null){
            return null;
        }

        old.setProfile(
                job.getProfile()
        );

        old.setDescription(
                job.getDescription()
        );

        old.setExperience(
                job.getExperience()
        );

        old.setTech(
                job.getTech()
        );

        return repo.save(old);

    }


    // DELETE
    public void deleteJob(
            int id
    ){

        repo.deleteById(id);

    }

public List<Job> search(
        String keyword
){

    return repo.searchJobs(keyword);

}

}