import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import './AccordionFAQ.css';

const faqs = [
  {
    q: 'What is the ISML Elite Membership?',
    a: 'The ISML Elite Card is a digital membership program that gives learners exclusive discounts, academic perks, and early access to premium courses and services offered by ISML.',
  },
  {
    q: 'How do I get my ISML Elite Card?',
    a: "Once you register and complete the payment, you'll receive your digital membership card via email within 2 working days.",
  },
  {
    q: 'Is the card physical or digital?',
    a: "It is a digital-only card. You'll receive a PDF or image version to your email for use during enrollments.",
  },
  {
    q: 'Can I use the card for any language course?',
    a: `Yes! Based on your card type:\n- EduPass – 1 language of your choice\n- ScholarPass – French, German, and Japanese\n- InfinityPass – All current + upcoming languages`,
  },
  {
    q: 'Can I upgrade my card later?',
    a: 'Yes. You can upgrade within 30 days of purchase by paying the price difference (plus ₹10 processing). Downgrades are not allowed.',
  },
  {
    q: 'Is the membership refundable?',
    a: `No. ISML Elite cards are non-refundable unless:\n- There was a technical issue during processing\n- You accidentally paid twice for the same card`,
  },
  {
    q: 'Can I use the card for more than one course?',
    a: 'Yes! You can use it for multiple eligible courses within your validity period.',
  },
  {
    q: 'Is there any discount on GST or registration fees?',
    a: 'No. Discounts do not apply to GST, registration charges, or third-party services.',
  },
  {
    q: 'How does the referral benefit work?',
    a: `If you refer a friend who enrolls in a course with ISML:\n- You get an extra 5% off (ScholarPass/InfinityPass only)\n- The referral must result in a paid enrollment\n- Self-referrals or fraud will void the benefit`,
  },
  {
    q: 'What happens if I misuse the card or share it?',
    a: 'Misuse (like sharing with others or fake referrals) will lead to termination without refund.',
  },
  {
    q: 'What if I lose access to my card?',
    a: 'You can request a free reissue by emailing us from your registered email ID. Limited to one reissue per year.',
  },
  {
    q: 'Can I transfer the membership to someone else?',
    a: 'No. Cards are non-transferable and tied to the registered learner\'s name.',
  },
  {
    q: 'Will I get help with international exams or study abroad?',
    a: `Yes, depending on your membership:\n- ScholarPass/InfinityPass members receive 1 free online consultation per year for study abroad planning.\n- Access to past exam papers and prep materials is also included.`,
  },
  {
    q: 'Does the card guarantee admission to ISML courses?',
    a: 'No. While the card offers discounts and perks, admission still depends on course availability and eligibility.',
  },
  {
    q: 'Where can I use the card benefits?',
    a: 'Only on official ISML platforms, directly through the institute. Benefits are not applicable through agents or external websites.',
  },
  {
    q: "I'm a parent—can I manage my child's membership?",
    a: "Yes, the card must be in the learner's name, but all communication and support can be directed to the parent/guardian (especially for minors).",
  },
  {
    q: "What's the benefit for school/college students preparing for placements or abroad?",
    a: 'ISML Elite offers discounts on diploma courses and free access to study abroad guidance (ScholarPass and InfinityPass only), helping students prepare affordably and confidently.',
  },
  {
    q: 'When can I use card benefits?',
    a: 'Card benefits, including discounts, are only applicable at the start of a new batch or course. They cannot be used for ongoing batches or courses.',
  },
  {
    q: 'Can ISML change the membership benefits or terms later?',
    a: `Yes. ISML may update the membership benefits, pricing, or terms from time to time.\n- Notified in advance via email to all active members\n- Updated on the official ISML website\n- These changes will apply only to new enrollments unless otherwise stated.`,
  },
];

export default function AccordionFAQ() {
  return (
    <div className="faq-wrapper">
      <Accordion.Root type="single" collapsible className="accordion">
        {faqs.map((faq, i) => (
          <Accordion.Item value={`faq-${i}`} key={i} className="accordion-item">
            <Accordion.Header>
              <Accordion.Trigger className="accordion-trigger">
                {faq.q}
                <span className="plus-minus">
                  <span className="horizontal"></span>
                  <span className="vertical"></span>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
              {faq.a.split('\n').map((line, j) => (
                <p key={j} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
