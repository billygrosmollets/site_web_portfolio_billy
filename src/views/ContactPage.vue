<template>
  <section id="contact">
    <p class="connect-text">
      Feel free to reach out using the form or through any of my social profiles!
    </p>

    <div class="social-icons">
      <a href="mailto:clementbilly04@gmail.com" class="social-icon">
        <img src="/src/assets/logo/gmail-logo.svg" alt="Email" />
      </a>
      <a href="https://github.com/billygrosmollets" target="_blank" class="social-icon">
        <img src="/src/assets/logo/github-logo.svg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/billy-clement/" target="_blank" class="social-icon">
        <img src="/src/assets/logo/linkedin-logo.svg" alt="LinkedIn" />
      </a>
    </div>

    <div class="contact-form">
      <form @submit.prevent="handleSubmit" method="POST">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Your name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>

        <div class="form-group full-width">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="form.subject"
            placeholder="What is this regarding?"
            required
          />
        </div>

        <div class="form-group full-width">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <div v-if="submitMessage" class="submit-message" :class="submitMessageType">
        {{ submitMessage }}
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitMessageType = ref('')

    // Configuration EmailJS
    const EMAILJS_SERVICE_ID = 'service_z48pwkr' // À remplacer
    const EMAILJS_TEMPLATE_ID = 'template_3aj2zbq' // À remplacer
    const EMAILJS_PUBLIC_KEY = 'HNiSojqOP6d9bcwB4' // À remplacer

    const handleSubmit = async () => {
      isSubmitting.value = true
      submitMessage.value = ''

      try {
        // Préparer les données pour EmailJS
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'clementbilly04@gmail.com',
        }

        // Envoyer l'email via EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        )

        submitMessage.value = 'Message sent successfully!'
        submitMessageType.value = 'success'

        // Reset form
        Object.keys(form).forEach((key) => (form[key] = ''))
      } catch (error) {
        submitMessage.value = 'Error sending message. Please try again.'
        submitMessageType.value = 'error'
        console.error('EmailJS error:', error)
      } finally {
        isSubmitting.value = false
        // Clear message after 5 seconds
        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      }
    }

    return {
      form,
      isSubmitting,
      submitMessage,
      submitMessageType,
      handleSubmit,
    }
  },
}
</script>

<style scoped>
#contact {
  text-align: center;
  padding: 100px 400px 50px;
  background: none;
}

.connect-text {
  font-size: 30px;
  margin-bottom: 40px;
  color: var(--text-color-primary);
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--border-color);
}

.social-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

[data-theme='light'] .social-icon {
  background-color: rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  transform: translateY(-5px);
  background-color: var(--hover-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.social-icon img {
  width: 32px;
  height: 32px;
}

[data-theme='light'] .social-icon img {
  filter: none;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.form-row {
  display: flex;
  justify-content: space-between;
  width: 800px;
  gap: 40px;
}

.form-group {
  flex: 1;
}

.form-group.full-width {
  width: 100%;
}

.form-group label {
  display: block;
  text-align: left;
  font-size: 16px;
  color: var(--text-color-secondary);
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: var(--text-color-primary);
  font-size: 16px;
  font-family: 'Lexend', sans-serif;
  margin-bottom: 20px;
  box-sizing: border-box;
}

[data-theme='light'] .form-group input,
[data-theme='light'] .form-group textarea {
  background-color: rgba(0, 0, 0, 0.1);
}

.form-group textarea {
  height: 170px;
  resize: none;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: rgba(0, 17, 34, 0.5);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Lexend', sans-serif;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  border: 2px solid #fb9e24;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

.submit-btn:hover:not(:disabled) {
  background: #fb9e24;
  box-shadow: 0 5px 15px rgb(255, 98, 0);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

[data-theme='light'] .submit-btn {
  background: rgba(240, 240, 240, 0.5);
  color: #333;
}

[data-theme='light'] .submit-btn:hover:not(:disabled) {
  background: #fb9e24;
  box-shadow: 0 5px 15px rgb(255, 98, 0);
}

.submit-message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}

.submit-message.success {
  background-color: rgba(0, 255, 0, 0.2);
  color: #00ff00;
  border: 1px solid #00ff00;
}

.submit-message.error {
  background-color: rgba(255, 0, 0, 0.2);
  color: #ff0000;
  border: 1px solid #ff0000;
}

/* Media queries */
@media (max-width: 1200px) {
  #contact {
    padding: 100px 200px 50px;
  }

  .form-row {
    width: 100%;
  }
}

@media (max-width: 768px) {
  #contact {
    padding: 100px 50px 50px;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .connect-text {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  #contact {
    padding: 80px 20px 30px;
  }

  .connect-text {
    font-size: 20px;
  }
}
</style>
