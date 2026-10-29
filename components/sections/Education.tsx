
import Image from "next/image";
import { education } from "@/lib/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";

export function Education() {
  return (
    <SectionShell id="education">
      {/* Background decorative orbs */}
      <div className="edu-bg-orbs" aria-hidden>
        <div className="edu-orb edu-orb-1" />
        <div className="edu-orb edu-orb-2" />
      </div>

      <div className="education-header">
        <Reveal>
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Education &"
            highlight="Qualifications"
          />
          <p className="education-intro">
            Building a strong foundation in computing
            and information technology.
          </p>
        </Reveal>
      </div>

      <div className="edu-timeline">
        {/* Vertical timeline spine */}
        <div className="edu-timeline-spine" aria-hidden />

        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 150}>
            <article className="edu-timeline-item">
              {/* Timeline connector node */}
              <div className="edu-timeline-node" aria-hidden>
                <div className="edu-timeline-node-dot" />
                <div className="edu-timeline-node-ring" />
              </div>

              {/* Main card */}
              <div className="edu-card">
                {/* Gradient border overlay */}
                <div className="edu-card-border" aria-hidden />

                {/* Card content area */}
                <div className="edu-card-body">
                  {/* Top row: index badge + period */}
                  <div className="edu-card-topline">
                    <span className="edu-badge">
                      <span className="edu-badge-icon">🎓</span>
                      <span className="edu-badge-text">0{index + 1}</span>
                    </span>
                    <span className="edu-period-chip">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {item.period}
                    </span>
                  </div>

                  {/* Main info */}
                  <div className="edu-card-info">
                    <h3 className="edu-degree">{item.degree}</h3>
                    <div className="edu-school-row">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="edu-school-icon">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <p className="edu-school">{item.school}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="edu-card-footer">
                    <div className="edu-status">
                      <span className="edu-status-pulse" />
                      <span>Academic qualification</span>
                    </div>
                    <div className="edu-card-decoration" aria-hidden>
                      <span /><span /><span />
                    </div>
                  </div>
                </div>

                {/* Certificate preview */}
                {item.image && (
                  <div className="edu-cert-wrap">
                    <div className="edu-cert-glow" aria-hidden />
                    <div className="edu-cert">
                      <div className="edu-cert-inner">
                        <Image
                          src={item.image}
                          alt={`${item.degree} certificate from ${item.school}`}
                          fill
                          sizes="(max-width: 640px) 180px, 240px"
                          className="edu-cert-image"
                        />
                      </div>
                      <div className="edu-cert-footer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        <span>CERTIFICATE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
