package com.sarthak.job_listing_backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sarthak.job_listing_backend.model.Job;
@Repository
public interface JobRepository extends JpaRepository<Job,Integer>{
   @Query("""
SELECT j
FROM Job j
WHERE LOWER(j.profile)
LIKE LOWER(CONCAT('%', :keyword, '%'))

OR LOWER(j.description)
LIKE LOWER(CONCAT('%', :keyword, '%'))

OR LOWER(j.tech)
LIKE LOWER(CONCAT('%', :keyword, '%'))

OR CAST(j.experience AS string)
LIKE CONCAT('%', :keyword, '%')
""")

List<Job> searchJobs(
        @Param("keyword")
        String keyword
);
}
