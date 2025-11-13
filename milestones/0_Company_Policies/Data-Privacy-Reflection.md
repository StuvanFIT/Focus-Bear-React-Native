
### Focus Bear Privacy Policy

The types of confidential data at Focus Bear:

- Identification data (email, phone, login details)
- Professional/academic info (occupation, training)
- Financial/payment details (handled by Stripe/RevenueCat)

The best practices in handling condifdentail data:

- Only access data if necessary for your task.
- Use the approved or secure tools by Focus bear like Auth0

### What steps can you take to ensure you handle data securely in your daily tasks?

To minimise the risk of data breaches, I should:

- Lock my device when I am not present
- Avoid using or pasting sensitive data into GPT
- Only access what I need

### How should you store, share, and dispose of sensitive information safely?

- Store information in encrypted, company-approved systems (AWS, Auth0).
- Share and communicate data in secure team chats/channels

### What are some common mistakes that lead to data privacy issues, and how can they be avoided?

- Accidentally sharing sensitive data via screenshots
- Reusing weak passwords for unique accounts
- Not logging out of your device when you are away

### Identify at least one habit or practice you can adopt to improve data security in your role

- Always double-check before sending files or messages that no confidential data is exposed.

### Document at least one key learning or security measure you will implement

- Report any suspected data breach immediately to the  Data Protection Officer (DPO), even if it seems minor or small as speed and transparency matter most.

### Example where I have to handle sensitive user information and how would I ensure its secure?

Potential task:

I might work on a task that specifically stores or accesses the user's daily session logs. This may include data like timestamps and notes (i.e. word spills).  This information could indirectly reveal personal habits or mental health patterns, so it’s considered sensitive user data.

To ensure privacy and confidentiality:

- I would store user data securely in an encrypted database (e.g. using HTTPS).  
- Any personally identifiable information, like email addresses, would be stored separately from focus logs and linked via a unique user ID.  
- When testing or debugging, I’d use dummy data, instead of real user records.  
- If sharing information with teammates (e.g., a bug report), I’d exclude or mask any private details and focus only on the technical issue.  
- I’d also limit access permissions so only authorised team members can view or edit sensitive data.
