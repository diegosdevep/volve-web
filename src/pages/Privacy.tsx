import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{isEs ? 'Política de privacidad' : 'Privacy Policy'}</h1>
      <p className="text-gray-400 text-sm mb-12">{isEs ? 'Última actualización: marzo 2026' : 'Last updated: March 2026'}</p>

      {isEs ? <PrivacyEs /> : <PrivacyEn />}
    </main>
  )
}

function PrivacyEs() {
  return (
    <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
      <section>
        <p>Volvé ("la app", "nosotros") desarrollada por Diego Maidana, respeta tu privacidad. Esta política describe qué datos recopilamos, cómo los usamos y cuáles son tus derechos.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Datos que recopilamos</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Cuenta:</strong> dirección de email, nombre y foto de perfil.</li>
          <li><strong>Sesiones de seguridad:</strong> información de la persona con quien te reunís, lugares, horarios, vestimenta.</li>
          <li><strong>Contactos de emergencia:</strong> nombre, teléfono y email de las personas que recibirán alertas.</li>
          <li><strong>Ubicación:</strong> puntos de ruta registrados durante una sesión activa.</li>
          <li><strong>Códigos de seguridad:</strong> almacenados exclusivamente en el Keychain de tu dispositivo. Nunca salen de él.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Cómo usamos tus datos</h2>
        <p>Los datos se usan únicamente para autenticar tu identidad, enviar alertas de emergencia a tus contactos designados, y mostrar el historial de sesiones dentro de la app. No vendemos ni compartimos tus datos con terceros para fines comerciales.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Terceros</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Firebase (Google):</strong> autenticación, base de datos y almacenamiento.</li>
          <li><strong>Twilio:</strong> envío de mensajes de WhatsApp a tus contactos de emergencia.</li>
          <li><strong>SendGrid:</strong> envío de emails a tus contactos de emergencia.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Retención de datos</h2>
        <p>Tus datos se conservan mientras tengas una cuenta activa. Podés eliminar tu cuenta y todos tus datos desde Configuración → Eliminar cuenta.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Seguridad</h2>
        <p>Las comunicaciones están cifradas en tránsito (TLS). Los datos en Firestore tienen reglas de acceso que solo permiten que cada usuario lea y escriba sus propios documentos.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contacto</h2>
        <p>Consultas sobre privacidad: <a href="mailto:soporte@volve-app.com" className="underline" style={{ color: '#7C6CFF' }}>soporte@volve-app.com</a></p>
      </section>
    </div>
  )
}

function PrivacyEn() {
  return (
    <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
      <section>
        <p>Volvé ("the app", "we") developed by Diego Maidana, respects your privacy. This policy describes what data we collect, how we use it, and your rights.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Data we collect</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Account:</strong> email address, name and profile photo.</li>
          <li><strong>Safety sessions:</strong> information about who you're meeting, locations, schedules, and outfit.</li>
          <li><strong>Emergency contacts:</strong> name, phone and email of people who will receive alerts.</li>
          <li><strong>Location:</strong> route points recorded during active sessions.</li>
          <li><strong>Safety codes:</strong> stored exclusively in your device's Keychain. Never in the cloud.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How we use your data</h2>
        <p>Data is used solely to authenticate your identity, send emergency alerts to your designated contacts, and display session history within the app. We do not sell or share your data with third parties for commercial purposes.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Third parties</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Firebase (Google):</strong> authentication, database and storage.</li>
          <li><strong>Twilio:</strong> sending WhatsApp messages to your emergency contacts.</li>
          <li><strong>SendGrid:</strong> sending emails to your emergency contacts.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data retention</h2>
        <p>Your data is kept while you have an active account. You can delete your account and all your data from Settings → Delete account.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Security</h2>
        <p>Communications are encrypted in transit (TLS). Firestore data has access rules that only allow each user to read and write their own documents.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact</h2>
        <p>Privacy inquiries: <a href="mailto:soporte@volve-app.com" className="underline" style={{ color: '#7C6CFF' }}>soporte@volve-app.com</a></p>
      </section>
    </div>
  )
}
