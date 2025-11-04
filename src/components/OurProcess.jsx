import React, { act, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../css/OurProcess.css";

const steps = [
  {
    title: "Step 1: Prepare the Woods",
    img: "https://tysginseng.s3.us-east-2.amazonaws.com/cleaned_woods_ready_for_ginseng_beds.jpg",
    desc: `Since we grow wild simulated ginseng, we have to prepare the woods
           which includes clearing fallen trees and sticks from the areas
           where the ginseng seeds will be planted.`,
  },
  {
    title: "Step 2: Make Ginseng Beds",
    img: "https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg",
    desc: `To give the ginseng plants the best chance of succeeding, we hand
           dig ginseng beds that have trenches on either side to facilitate
           proper drainage.`,
  },
  {
    title: "Step 3: Plant Seeds",
    img: "https://tysginseng.s3.us-east-2.amazonaws.com/planting_ginseng.jpg",
    desc: `Seeds are planted in the beds using a push behind one row planter
           to ensure even spacing, proper seed depth within the soil, and
           proper row spacing.`,
  },
  {
    title: "Step 4: Monitor and Maintain",
    img: "https://tysginseng.s3.us-east-2.amazonaws.com/ginseng_beds_covered_with_straw.jpg",
    desc: `After the seeds are planted, we allow them to grow a minimum of 6
           years before harvesting. During these years, maintenance is done
           by cleaning up fallen trees and branches.`,
  },
  {
    title: "Step 5: Harvest",
    img: "https://tysginseng.s3.us-east-2.amazonaws.com/ty_digging_ginseng_root.jpg",
    desc: `Once the ginseng roots have reached 6+ years, the roots are hand
           dug one by one. This is to ensure roots are not damaged during the
           digging process. After digging the roots, they are washed, dried,
           and made into a powder for our customers to enjoy.`,
  },
];

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="our-process-page">
      <Helmet>
        <title>Ty's Ginseng | Our Process</title>
        <meta
          name="description"
          content="Premium Woods Grown Ginseng Roots, Ginseng Powder and Ginseng Products."
        />
        <meta
          name="keywords"
          content="Ginseng, Woods Grown Ginseng, Ginseng Products, Ginseng Powder, Premium Ginseng, Bulk Ginseng, Ginseng Roots, inflammation, energy, immune system, immunity, cold remedy, brain function, reduce inflammation, boost immunity"
        />
        <meta property="og:title" content="Ty's Ginseng - Our Process" />
        <meta
          property="og:description"
          content="Learn about how we grow our ginseng and get it ready for our customers."
        />
      </Helmet>

      <div className="tab-container rounded shadow p-3 mt-4">
        <h1 className="pt-1 mb-2">Our Process</h1>

        <ul className="nav nav-tabs mb-3">
          {steps.map((step, idx) => (
            <li key={idx} className="nav-item">
              <button
                className={`nav-link ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                Step {idx + 1}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          <div className="tab-layout h-100">
            <div
              style={{ flex: "0 0 40%" }}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={steps[activeStep].img}
                alt={steps[activeStep].title}
                className="img-fluid img-custom rounded"
              />
            </div>
            <div
              className="d-flex flex-column justify-content-start align-items-center py-1 px-3"
              style={{ flex: "0 0 60%" }}
            >
              <h4 className="fw-bold text-center">{steps[activeStep].title}</h4>
              <p className="text-center">{steps[activeStep].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
