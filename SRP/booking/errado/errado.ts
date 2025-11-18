class BookingServiceErrado {
  // Validação das datas
  processBooking(bookingDetails: any) {
    if (bookingDetails.startDate >= bookingDetails.endDate) {
      throw new Error("Data de check-out dever ser após a data de check-in");
    }

    // Calculo do preço total
    const durationInDays = Math.ceil(
      (bookingDetails.endDate.getTime() - bookingDetails.startDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const totalPrice = bookingDetails.dailyRate * durationInDays;

    console.log(`preço total calculado: R$${totalPrice}`);

    // Envio de confirmação por e-mail
    console.log(`Enviando e-mail de confirmação para ${bookingDetails.email}`);
  }
}
