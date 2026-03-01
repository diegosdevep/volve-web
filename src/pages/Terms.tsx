import { useTranslation } from 'react-i18next'

export default function Terms() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{isEs ? 'Términos y condiciones' : 'Terms of Service'}</h1>
      <p className="text-gray-400 text-sm mb-12">{isEs ? 'Última actualización: marzo 2026' : 'Last updated: March 2026'}</p>

      {isEs ? <TermsEs /> : <TermsEn />}
    </main>
  )
}

function TermsEs() {
  return (
    <div className="space-y-8 text-gray-600 leading-relaxed">
      <section>
        <p>Al usar Volvé, aceptás los presentes términos. Leelos con atención antes de utilizar la aplicación.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Descripción del servicio</h2>
        <p>Volvé es una herramienta de seguridad personal que permite configurar sesiones de seguimiento y enviar alertas automáticas a contactos de emergencia si no se desactiva la alarma a tiempo.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Limitación de responsabilidad</h2>
        <p>Volvé es una herramienta de apoyo, <strong>NO es un servicio de emergencias</strong> ni reemplaza al 911 ni a ningún otro servicio de seguridad oficial. En situaciones de peligro inmediato, contactá al número de emergencias de tu país. No garantizamos la entrega de alertas en todos los casos.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cuenta de usuario</h2>
        <p>Sos responsable de mantener la confidencialidad de tu contraseña y tus códigos de seguridad. No podemos recuperar los códigos almacenados en el Keychain si perdés acceso a tu dispositivo.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Uso aceptable</h2>
        <p>No podés usar Volvé para enviar alertas falsas de forma deliberada, suplantar la identidad de otra persona, ni para cualquier uso contrario a las leyes vigentes.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Eliminación de cuenta</h2>
        <p>Podés eliminar tu cuenta y todos tus datos en cualquier momento desde Configuración → Eliminar cuenta. La eliminación es permanente e irreversible.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contacto</h2>
        <p>Consultas: <a href="mailto:soporte@volve-app.com" className="underline" style={{ color: '#7C6CFF' }}>soporte@volve-app.com</a></p>
      </section>
    </div>
  )
}

function TermsEn() {
  return (
    <div className="space-y-8 text-gray-600 leading-relaxed">
      <section>
        <p>By using Volvé, you accept these terms. Please read them carefully before using the application.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Service description</h2>
        <p>Volvé is a personal safety tool that allows you to set up tracking sessions and send automatic alerts to emergency contacts if the alarm is not deactivated in time.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Limitation of liability</h2>
        <p>Volvé is a support tool, <strong>NOT an emergency service</strong> and does not replace 911 or any other official safety service. In situations of immediate danger, contact your country's emergency number. We do not guarantee alert delivery in all cases.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User account</h2>
        <p>You are responsible for maintaining the confidentiality of your password and safety codes. We cannot recover codes stored in the Keychain if you lose access to your device.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Acceptable use</h2>
        <p>You may not use Volvé to deliberately send false alerts, impersonate another person, or for any use contrary to applicable laws.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Account deletion</h2>
        <p>You can delete your account and all your data at any time from Settings → Delete account. Deletion is permanent and irreversible.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h2>
        <p>Inquiries: <a href="mailto:soporte@volve-app.com" className="underline" style={{ color: '#7C6CFF' }}>soporte@volve-app.com</a></p>
      </section>
    </div>
  )
}
