package com.example.taskmanager.controller;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.taskmanager.model.Message;

import jakarta.mail.internet.MimeMessage;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final JavaMailSender mailSender;

    public ContactController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping
    public String sendMessage(@RequestBody Message message) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

            helper.setTo("charusingla38@gmail.com");
            helper.setSubject("💬 New Portfolio Message from " + message.getName());

            String htmlContent = """
            <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f4f4f4; padding: 30px;">
                <div style="max-width: 600px; margin:auto; background:#ffffff; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                    <h2 style="color:#4F46E5; text-align:center; margin-bottom: 20px;">
                        🚀 New Message from Your Portfolio
                    </h2>

                    <p style="font-size:16px; color:#333;">
                        <strong style="color:#4F46E5;">Name:</strong> %s
                    </p>
                    <p style="font-size:16px; color:#333;">
                        <strong style="color:#4F46E5;">Email:</strong> %s
                    </p>

                    <div style="margin-top:25px; padding:20px; background:#F9FAFB; border-left:4px solid #4F46E5; border-radius:8px;">
                        <p style="font-size:16px; color:#111; white-space: pre-line;">
                            %s
                        </p>
                    </div>

                    <p style="text-align:center; margin-top:30px; font-size:14px; color:#666;">
                        — This message was sent via your portfolio website —
                    </p>
                </div>
            </div>
        """.formatted(message.getName(), message.getEmail(), message.getMessage());

            helper.setText(htmlContent, true);

            mailSender.send(mimeMessage);
            return "Message sent successfully!";

        } catch (Exception e) {
            e.printStackTrace();
            return "Email failed to send.";
        }
    }

}
