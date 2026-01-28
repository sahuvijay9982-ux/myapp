import React from "react";
import Team from "./Team";
function About() {
  return (
    <>
      <div class="container my-5">
        <div class="row align-items-center g-5">
          <div class="col-md-6">
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
              class="img-fluid rounded"
              alt="About Us"
            />
          </div>

          <div class="col-md-6">
            <h2 class="mb-3">About Us</h2>

            <p class="text-muted">
              We are a passionate team of developers and designers dedicated to
              building high-quality, modern, and scalable digital solutions.
            </p>

            <p class="text-muted">
              Our goal is to help startups and businesses establish a strong
              online presence with clean design, fast performance, and
              user-friendly experiences.
            </p>

            <ul class="list-unstyled">
              <li class="mb-2">✅ 100% Responsive Design</li>
              <li class="mb-2">✅ Modern Technologies</li>
              <li class="mb-2">✅ Client-Focused Approach</li>
              <li class="mb-2">✅ Affordable Pricing</li>
            </ul>

            <button class="btn btn-dark mt-3">Learn More</button>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
}

export default About;
