const transportador = require("../conexoes/nodemailer");
const knex = require("../conexoes/postgres");

const cadastrarEmail = async (req, res) => {
  const { nome, email } = req.body;

  try {
    //validacoes de email aqui, sao interessantes...
    await knex("emails").insert({ nome, email });

    return res.status(201).json({ message: "Cadastro efetuado com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
};

const enviarNewsletter = async (req, res) => {
  const { texto } = req.body;

  try {
    const emails = await knex("emails");

    for (const email of emails) {
      transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${email.nome} <${email.email}>`,
        subject: "Newsletter de Teste Servidor de Emails",
        html: `
          Olá ${email.nome}.
          ${texto}
        `,
      });
    }

    return res.status(204).send();
  } catch (error) {
    //console.log(error) ~~~
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  cadastrarEmail,
  enviarNewsletter,
};