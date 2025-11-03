import { ChangeDetectionStrategy, Component, signal, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  activeSection = signal('about');
  activeExperience = signal('Pencil Walk');
  
  toastMessage = signal<string | null>(null);
  toastType = signal<'success' | 'error' | null>(null);
  isSubmitting = signal(false);

  contactForm!: FormGroup;
  private fb = inject(FormBuilder);

  socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/vishal-prabhakaran',
      iconPath: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishal-p-276385348',
      iconPath: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vishal_prabhakaran_/',
      iconPath: 'M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z M16.5 7.5h.01'
    }
  ];

  experiences = [
    {
      company: 'Pencil Walk private limited',
      tabName: 'Pencil Walk',
      role: 'Web Development Intern',
      period: 'Internship',
      tasks: [
        'Worked with a team to build and maintain web applications using HTML, CSS, JavaScript, and PHP.',
        'Gained hands-on experience in real-time project development cycles and agile methodologies.',
        'Enhanced web development skills by applying them to practical, industry-level tasks.',
        'Contributed to creating responsive and user-friendly web interfaces for various clients.',
      ]
    },
    {
      company: 'Ezo technologies',
      tabName: 'Ezo',
      role: 'Another Role',
      period: 'Some Period',
      tasks: [
        'Did something else here.',
        'Another task for this role.',
      ]
    }
  ];

  technologies = [
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "C# & .NET",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
  ];

  projects = [
    {
      name: 'OnCallActingDriver Platform',
      description: 'A comprehensive platform connecting users with professional acting drivers for safe and reliable transportation services.',
      tags: ['Angular', '.NET', 'MySQL', 'Azure'],
      imageUrl: 'https://images.unsplash.com/photo-1619642751222-5572625f54a8?q=80&w=800',
      link: '#'
    },
    {
      name: 'Responsive Personal Portfolio',
      description: 'A responsive portfolio website built to apply my full-stack development skills. This project showcases my abilities in creating a modern, user-friendly web presence from scratch.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=800',
      link: '#'
    },
    {
      name: 'Full Stack App Concept',
      description: 'A concept for a full-stack application. More details to come.',
      tags: [],
      imageUrl: 'https://images.unsplash.com/photo-1511920183276-5941c3095637?q=80&w=800',
      link: '#'
    },
    {
      name: 'Project EMP Model Presentation',
      description: 'A presentation model for Project EMP.',
      tags: [],
      imageUrl: 'https://images.unsplash.com/photo-1437964726245-714752a658a5?q=80&w=800',
      link: '#'
    }
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get currentExperience() {
    return this.experiences.find(exp => exp.tabName === this.activeExperience());
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.showToast('Please fill out all fields correctly.', 'error');
      return;
    }

    this.isSubmitting.set(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', this.contactForm.value);
      this.isSubmitting.set(false);
      this.showToast('Message sent successfully!', 'success');
      this.contactForm.reset();
    }, 1500);
  }

  showToast(message: string, type: 'success' | 'error') {
    this.toastMessage.set(message);
    this.toastType.set(type);
    setTimeout(() => {
      this.toastMessage.set(null);
      this.toastType.set(null);
    }, 4000);
  }
}