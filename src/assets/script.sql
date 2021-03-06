USE [AutomotiveDB]
GO
/****** Object:  Table [dbo].[tblAppointments]    Script Date: 3/8/2021 5:41:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblAppointments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CustomerId] [int] NOT NULL,
	[LicencePlate] [nvarchar](20) NOT NULL,
	[FName] [nvarchar](50) NOT NULL,
	[LName] [nvarchar](50) NOT NULL,
	[MobileNo] [nvarchar](15) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[Country] [nvarchar](50) NOT NULL,
	[Model] [nvarchar](50) NOT NULL,
	[Brand] [nvarchar](50) NOT NULL,
	[DealerId] [int] NOT NULL,
	[Status] [nvarchar](50) NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[TotalPrice] [real] NULL,
	[TotalTime] [decimal](5, 2) NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblAppointments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblAppointmentServices]    Script Date: 3/8/2021 5:41:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblAppointmentServices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AppointmentId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
	[CostType] [nvarchar](50) NOT NULL,
	[SalesPart] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](400) NULL,
	[Quantity] [int] NOT NULL,
	[PricePerUnit] [real] NOT NULL,
	[Price] [real] NOT NULL,
	[Discount] [real] NOT NULL,
	[FixPrice] [real] NOT NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdateBy] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblServices] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCustomers]    Script Date: 3/8/2021 5:41:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCustomers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [nvarchar](100) NOT NULL,
	[FName] [nvarchar](50) NULL,
	[LName] [nvarchar](50) NULL,
	[Address] [nvarchar](400) NOT NULL,
	[ZipCode] [nvarchar](10) NOT NULL,
	[City] [nvarchar](50) NOT NULL,
	[Country] [nvarchar](50) NOT NULL,
	[CustomerNo] [nvarchar](20) NOT NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
	[Email] [nvarchar](100) NULL,
 CONSTRAINT [PK_tblCustomers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblDealers]    Script Date: 3/8/2021 5:41:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblDealers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DealerName] [nvarchar](100) NOT NULL,
	[DealerNo] [nvarchar](20) NOT NULL,
	[isActive] [bit] NULL,
	[isOnline] [bit] NULL,
	[Website] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NOT NULL,
	[PhoneNo] [nvarchar](15) NOT NULL,
	[Address] [nvarchar](400) NOT NULL,
	[Latitude] [real] NOT NULL,
	[Longitude] [real] NOT NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblDealers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblDealersMechanics]    Script Date: 3/8/2021 5:41:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblDealersMechanics](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DealerId] [int] NOT NULL,
	[MechanicId] [int] NOT NULL,
 CONSTRAINT [PK_tblDealersMechanics] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblMechanics]    Script Date: 3/8/2021 5:41:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblMechanics](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MechanicName] [nvarchar](100) NOT NULL,
	[EmployeeNo] [nvarchar](20) NOT NULL,
	[MobileNo] [nvarchar](15) NOT NULL,
	[EmailId] [nvarchar](100) NOT NULL,
	[isActive] [bit] NULL,
	[CreatedBy] [nvarchar](50) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
	[DealerId] [int] NOT NULL,
 CONSTRAINT [PK_tblMechanics] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblPlannings]    Script Date: 3/8/2021 5:41:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblPlannings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AppointmentId] [int] NOT NULL,
	[MechanicId] [int] NOT NULL,
	[AppointmentServiceId] [int] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[Duration] [datetime] NULL,
 CONSTRAINT [PK_tblPlannings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblServices]    Script Date: 3/8/2021 5:41:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblServices](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Price] [real] NOT NULL,
	[FixPrice] [real] NOT NULL,
	[Discount] [real] NOT NULL,
	[Description] [nvarchar](500) NOT NULL,
	[CreatedBy] [nvarchar](100) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](100) NULL,
	[UpdatedDate] [nvarchar](100) NULL,
	[DealerId] [int] NOT NULL,
 CONSTRAINT [PK_tblServices_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVehicles]    Script Date: 3/8/2021 5:41:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVehicles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](300) NULL,
	[Brand] [nvarchar](50) NOT NULL,
	[LicencePlate] [nvarchar](20) NOT NULL,
	[Model] [nvarchar](50) NOT NULL,
	[MeterValue] [int] NULL,
	[RegDate] [date] NOT NULL,
	[Weight] [real] NULL,
	[MCHCode] [nvarchar](50) NULL,
	[Vin] [nvarchar](30) NOT NULL,
	[EngNo] [nvarchar](50) NULL,
	[Colour] [nvarchar](20) NULL,
	[CreatedBy] [nvarchar](100) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
	[CustomerId] [int] NOT NULL,
 CONSTRAINT [PK_tblVehicles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tblDealers] ADD  CONSTRAINT [DF_tblDealers_isActive]  DEFAULT ((1)) FOR [isActive]
GO
ALTER TABLE [dbo].[tblDealers] ADD  CONSTRAINT [DF_tblDealers_isOnline]  DEFAULT ((1)) FOR [isOnline]
GO
ALTER TABLE [dbo].[tblMechanics] ADD  CONSTRAINT [DF_tblMechanics_isActive]  DEFAULT ((1)) FOR [isActive]
GO
ALTER TABLE [dbo].[tblAppointments]  WITH CHECK ADD  CONSTRAINT [FK_tblAppointments_tblCustomers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tblCustomers] ([Id])
GO
ALTER TABLE [dbo].[tblAppointments] CHECK CONSTRAINT [FK_tblAppointments_tblCustomers]
GO
ALTER TABLE [dbo].[tblAppointments]  WITH CHECK ADD  CONSTRAINT [FK_tblAppointments_tblDealers] FOREIGN KEY([DealerId])
REFERENCES [dbo].[tblDealers] ([Id])
GO
ALTER TABLE [dbo].[tblAppointments] CHECK CONSTRAINT [FK_tblAppointments_tblDealers]
GO
ALTER TABLE [dbo].[tblAppointmentServices]  WITH CHECK ADD  CONSTRAINT [FK_tblAppointmentServices_tblAppointments] FOREIGN KEY([AppointmentId])
REFERENCES [dbo].[tblAppointments] ([Id])
GO
ALTER TABLE [dbo].[tblAppointmentServices] CHECK CONSTRAINT [FK_tblAppointmentServices_tblAppointments]
GO
ALTER TABLE [dbo].[tblAppointmentServices]  WITH CHECK ADD  CONSTRAINT [FK_tblAppointmentServices_tblServices] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[tblServices] ([Id])
GO
ALTER TABLE [dbo].[tblAppointmentServices] CHECK CONSTRAINT [FK_tblAppointmentServices_tblServices]
GO
ALTER TABLE [dbo].[tblDealersMechanics]  WITH CHECK ADD  CONSTRAINT [FK_tblDealersMechanics_tblDealers] FOREIGN KEY([DealerId])
REFERENCES [dbo].[tblDealers] ([Id])
GO
ALTER TABLE [dbo].[tblDealersMechanics] CHECK CONSTRAINT [FK_tblDealersMechanics_tblDealers]
GO
ALTER TABLE [dbo].[tblDealersMechanics]  WITH CHECK ADD  CONSTRAINT [FK_tblDealersMechanics_tblMechanics] FOREIGN KEY([MechanicId])
REFERENCES [dbo].[tblMechanics] ([Id])
GO
ALTER TABLE [dbo].[tblDealersMechanics] CHECK CONSTRAINT [FK_tblDealersMechanics_tblMechanics]
GO
ALTER TABLE [dbo].[tblMechanics]  WITH CHECK ADD  CONSTRAINT [FK_tblMechanics_tblDealers] FOREIGN KEY([DealerId])
REFERENCES [dbo].[tblDealers] ([Id])
GO
ALTER TABLE [dbo].[tblMechanics] CHECK CONSTRAINT [FK_tblMechanics_tblDealers]
GO
ALTER TABLE [dbo].[tblPlannings]  WITH CHECK ADD  CONSTRAINT [FK_tblPlannings_tblAppointments] FOREIGN KEY([AppointmentId])
REFERENCES [dbo].[tblAppointments] ([Id])
GO
ALTER TABLE [dbo].[tblPlannings] CHECK CONSTRAINT [FK_tblPlannings_tblAppointments]
GO
ALTER TABLE [dbo].[tblPlannings]  WITH CHECK ADD  CONSTRAINT [FK_tblPlannings_tblAppointmentServices] FOREIGN KEY([AppointmentServiceId])
REFERENCES [dbo].[tblAppointmentServices] ([Id])
GO
ALTER TABLE [dbo].[tblPlannings] CHECK CONSTRAINT [FK_tblPlannings_tblAppointmentServices]
GO
ALTER TABLE [dbo].[tblPlannings]  WITH CHECK ADD  CONSTRAINT [FK_tblPlannings_tblMechanics] FOREIGN KEY([MechanicId])
REFERENCES [dbo].[tblMechanics] ([Id])
GO
ALTER TABLE [dbo].[tblPlannings] CHECK CONSTRAINT [FK_tblPlannings_tblMechanics]
GO
ALTER TABLE [dbo].[tblServices]  WITH CHECK ADD  CONSTRAINT [FK_tblServices_tblDealers] FOREIGN KEY([DealerId])
REFERENCES [dbo].[tblDealers] ([Id])
GO
ALTER TABLE [dbo].[tblServices] CHECK CONSTRAINT [FK_tblServices_tblDealers]
GO
ALTER TABLE [dbo].[tblVehicles]  WITH CHECK ADD  CONSTRAINT [FK_tblVehicles_tblCustomers] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[tblCustomers] ([Id])
GO
ALTER TABLE [dbo].[tblVehicles] CHECK CONSTRAINT [FK_tblVehicles_tblCustomers]
GO
